import {
    validationResult
} from "express-validator"
import {
    add_host,
    get_podcast_hosts
} from "../../../utils/database"

export default {
    get: (req, res) => {
        const hosts = get_state_hosts(req.params.id)
        if (hosts.length != 0)
            res.status(200).json(hosts)
        else res.status(404).json({
            error: 'State or Hosts Not Found'
        })
    },
    create: (req, res) => {
        const state_id = req.params.id

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const new_hosts = add_host({
            state_id,
            ...req.body
        })

        res.status(200).json(new_hosts)
    }
}