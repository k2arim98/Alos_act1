import {
    body,
    param,
    check
} from 'express-validator'

function check_if_date(string) {
    return !isNaN(new Date(string).getDate())
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export default {
    get_state: [
        param('id').isString()
    ],
    create_state: [
        body('name').isString().trim().customSanitizer(value => capitalize(value)),
        body('dairas').isInt(),
        body('communes').isInt(),
        body('about').isString().trim(),
        body('lat').isFloat(),
        body('long').isFloat(),
        body('hosts').isArray(),
        check('hosts.*.id').isInt(),
        check('hosts.*.name').isString().trim().customSanitizer(value => capitalize(value)).isAlpha("en-US", {
            "ignore": [" ", "-", "'"]
        }).trim()

    ],
    update_state: [
        body('name').optional().isString().trim().customSanitizer(value => capitalize(value)),
        body('dairas').optional().isInt(),
        body('communes').optional().isInt(),
        body('about').optional().isString().trim(),
        body('lat').optional().isFloat(),
        body('long').optional().isFloat(),
        body('hosts').optional().isArray(),
        check('hosts.*.id').optional().isInt(),
        check('hosts.*.name').optional().isString().trim().customSanitizer(value => capitalize(value)).isAlpha("en-US", {
            "ignore": [" ", "-", "'"]
        }).trim(),
        param('id').isString()
    ],
    delete_state: [
        param('id').isInt()
    ],
    // hosts
    create_host: [
        body('name').isString().trim().customSanitizer(value => capitalize(value)),
        body('email').trim().isEmail()
    ]
}