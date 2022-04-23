import users from '../../../../database/users.json'
import reviews from '../../../../database/reviews.json'
import {
    writeFileSync
} from 'fs'

export default {
    get_all() {
        return users;
    },

    get(id) {
        const user = users.find(user => user.id == id)

        return user
    },
    get_by(param, value) { //gets the user by the name of the parameter and it's value
        const user = users.find(user => user[param] == value)

        return user
    },
    add(user) {
        const new_user = {
            ...user,
            "id": Date.now().toString(36)
        }
        let new_users = [
            ...users,
            new_user
        ]
        const new_data = JSON.stringify(new_users)

        writeFileSync("database/users.json", new_data)

        return new_user
    },

    //delete user

    delete(id) {
        let index = users.findIndex(user => user.id == id)

        users.splice(index, 1)
        const new_data = JSON.stringify(users)

        writeFileSync("database/users.json", new_data)

        return users
    },

    get_reviews(user_id) {
        return reviews.filter(review => review.user_id == user_id)
    },

    delete_reviews(user_id) {
        let new_reviews = reviews.filter(review => review.user_id != user_id)

        const new_data = JSON.stringify(new_reviews)

        writeFileSync("database/reviews.json", new_data)

        return new_reviews
    }

}