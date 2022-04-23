import Countries from '../Models/Countrie'

export default {
    get_all: (req, res) => {
        res.status(200).json(Countries.get_all())
    },

    get: (req, res) => {
        const state = Countries.get(req.params.id)
        if (state)
            res.status(200).json(state)
        else res.status(404).json({
            error: 'State Not Found'
        })
    },

    create: (req, res) => {

        const new_state = Countries.add(req.body)

        res.status(201).json(new_state)
    },

    update: (req, res) => {

        const id = req.params.id

        const new_state = Countries.update(id, req.body)

        res.status(200).json(new_state)
    },

    delete: (req, res) => {

        const id = req.params.id

        const new_state = Countries.delete(id)

        res.status(200).json(new_state)
    },

    get_reviews: (req, res) => {
        const reviews = Countries.get_reviews(req.params.id)
        if (reviews != [])
            res.status(200).json(reviews)
        else res.status(404).json({
            error: 'State Or Reviews Not Found'
        })
    }
}