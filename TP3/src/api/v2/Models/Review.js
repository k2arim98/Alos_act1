import reviews from '../../../../database/reviews.json'
import {
    writeFileSync
} from 'fs'

export default {

    get_all() {
        return reviews;
    },

    get(id) {
        const review = reviews.find(review => review.id == id)

        return review
    },


    add(review) {
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
    },

    delete(id) {
        let index = reviews.findIndex(review => review.id == id)

        reviews.splice(index, 1)
        const new_data = JSON.stringify(reviews)

        writeFileSync("database/reviews.json", new_data)

        return reviews
    }
}