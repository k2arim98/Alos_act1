import express from 'express'
import validation from '../../utils/validation'
import CountriesController from './Controllers/CountriesController'
import HostController from './Controllers/HostController'
import ReviewController from './Controllers/ReviewController'
import UserController from './Controllers/UserController'

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

// reviews

router.get('/Countries/:id/reviews',
CountriesController.get_reviews)

router.post('/Countries/:id/reviews',
    ReviewController.create)

router.delete('reviews/:id',
    ReviewController.delete)


// users

router.get('/users',
    UserController.get_all)

router.get('/users/:id',
    UserController.get)

router.get('/users/:id/reviews',
    UserController.get_reviews)

export default router;