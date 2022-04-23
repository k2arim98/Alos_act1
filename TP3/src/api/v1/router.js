import express from 'express'
import validation from '../../utils/validation'
import CountriesController from './Controllers/CountriesController'
import HostController from './Controllers/HostController'

const router = express.Router()

// Countries

router.get('/Countries', CountriesController.get_all)

router.get('/Countries/:id',
    ...validation.get_state,
    CountriesController.get)

router.post('/Countries',
    ...validation.create_state,
    CountriesController.create)

router.put('/Countries/:id',
    ...validation.update_state,
    CountriesController.update)
router.delete('/Countries/:id',
    ...validation.delete_state,
    CountriesController.delete) //deletes hosts too


// hosts

router.get('/Countries/:id/hosts',
    HostController.get
)

router.post('/Countries/:id/hosts',
    ...validation.create_host,
    HostController.create)


export default router;