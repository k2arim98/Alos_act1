import {
    validationResult
} from 'express-validator'

import {
    get_states,
    get_state,
    add_state,
    update_state,
    delete_state
} from '../../../utils/database'

export default {
    get_all: (req, res) => {
        res.status(200).json(get_states())
    },
    get: (req, res) => {
        const state = get_state(req.params.id)
        if (state)
            res.status(200).json(state)
        else res.status(404).json({
            error: 'State Not Found'
        })
    },

    create: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const new_state = add_state(req.body)

        res.status(201).json(new_state)
    },

    update: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_states = update_state(id, req.body)

        res.status(200).json(new_states)
    },

    delete: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_states = delete_state(id)

        res.status(200).json(new_states)
    }
}