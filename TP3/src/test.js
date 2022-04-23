import fs, {
    writeFileSync
} from 'fs';
import Countries from '../database/Countries.json';
import hosts from '../database/hosts.json'

dothing()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dothing() {
    var stream = fs.createWriteStream("database/Countries.json");
    stream.on('error', console.error);
    let new_state = Countries
    for (let i = 0; i < Countries.length; i++) {
        delete new_state[i]['hosts']
    }
    const new_data = JSON.stringify(new_state);
    stream.write(new_data);
    stream.end();
}

function create_host(stream, host) {
    console.log(host.id)
    let new_hosts = [
        ...hosts,
        {
            ...host,
            "id": Date.now().toString(36)
        }
    ];
    const new_data = JSON.stringify(new_hosts);
    stream.write(new_data);

}