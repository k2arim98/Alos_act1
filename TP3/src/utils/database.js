import {
    writeFileSync
} from 'fs'
import Countries from '../../database/Countries.json'
import hosts from '../../database/hosts.json'
import reviews from '../../database/reviews.json'
import users from '../../database/users.json'




// Countries

export function get_states() {
    return Countries
}

export const get_state = id => {
    const state = Countries.find(state => state.id == id)

    return state
}


export function add_state(state) {
    let new_states = [
        ...Countries,
        {
            ...state,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_states)

    writeFileSync("database/Countries.json", new_data)

    return new_states
}


export function update_state(id, data) {
    let index = Countries.findIndex(state => state.id == id)
    Object.entries(data).map(([key, value]) => {
        Countries[index][key] = value
    });

    const new_data = JSON.stringify(Countries)

    writeFileSync("database/Countries.json", new_data)

    return Countries
}
export function delete_state(id) {
    let index = Countries.findIndex(state => state.id == id)

    Countries.splice(index, 1)
    delete_hosts(id)
    const new_data = JSON.stringify(Countries)

    writeFileSync("database/Countries.json", new_data)

    return Countries
}




// HOSTS
 

export function get_hosts() {
    return hosts
}

export const get_state_hosts = state_id => {

    return hosts.filter(host => host.state_id == state_id)
}

export function add_host(host) {
    let new_hosts = [
        ...hosts,
        {
            ...host,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_hosts)

    writeFileSync("database/hosts.json", new_data)

    return new_hosts
}

export function delete_hosts(state_id) {
    let new_hosts = hosts.filter(host => host.state_id != state_id)

    const new_data = JSON.stringify(new_hosts)

    writeFileSync("database/hosts.json", new_data)

    return new_hosts
}


// Get  Reviews
export function get_state_reviews(state_id) {
    return reviews.filter(review => review.state_id == state_id)
}

//     get_user_reviews
export function get_user_reviews(user_id) {
    return reviews.filter(review => review.user_id == user_id)
}

//     add_review
export function add_review(review) {
    let new_reviews = [
        ...reviews,
        {
            ...review,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_reviews)

    writeFileSync("database/reviews.json", new_data)

    return new_reviews
}

//     delete_review

export function delete_review(id) {
    let index = reviews.findIndex(review => review.id == id)

    reviews.splice(index, 1)
    const new_data = JSON.stringify(reviews)

    writeFileSync("database/reviews.json", new_data)

    return reviews
}

//users

export function get_users() {
    return users;
}

//get user

export const get_user = id => {
    const user = users.find(user => user.id == id)

    return user
}


//create user

export function add_user(user) {
    let new_users = [
        ...users,
        {
            ...user,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_users)

    writeFileSync("database/users.json", new_data)

    return new_users
}

//delete user

export function delete_user(id) {
    let index = users.findIndex(user => user.id == id)

    users.splice(index, 1)
    const new_data = JSON.stringify(users)

    writeFileSync("database/users.json", new_data)

    return users
}

//delete user review

export function delete_user_reviews(user_id) {
    let new_reviews = reviews.filter(review => review.user_id != user_id)

    const new_data = JSON.stringify(new_reviews)

    writeFileSync("database/reviews.json", new_data)

    return new_reviews
}