import Countries from '../../../../database/Countries.json'
import reviews from '../../../../database/reviews.json'
import hosts from '../../../../database/hosts.json'
import {
    writeFileSync
} from 'fs'


export default {
    get_all() {
        return Countries
    },

    get(id) {
        const state = Countries.find(state => state.id == id)

        return state
    },


    add(state) {
        let new_state = [
            ...Countries,
            {
                ...Countries,
                "id": Date.now().toString(36)
            }
        ]
        const new_data = JSON.stringify(new_state)

        writeFileSync("database/Countries.json", new_data)

        return new_state
    },


    update(id, data) {
        let index = Countries.findIndex(state => state.id == id)
        Object.entries(data).map(([key, value]) => {
            Countries[index][key] = value
        });

        const new_data = JSON.stringify(Countries)

        writeFileSync("database/Countries.json", new_data)

        return Countries
    },

    delete(id) {
        let index = Countries.findIndex(state => state.id == id)

        Countries.splice(index, 1)
        delete_hosts(id)
        const new_data = JSON.stringify(Countries)

        writeFileSync("database/Countries.json", new_data)

        return Countries
    },

    get_hosts(state_id) {

        return hosts.filter(host => host.state_id == state_id)
    },

    get_reviews(state_id) {
        return reviews.filter(review => review.state_id == state_id)
    }
}