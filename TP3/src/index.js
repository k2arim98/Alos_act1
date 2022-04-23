import express, {
    json
} from 'express'
import v1router from './api/v1/router'
import v2router from './api/v2/router'
import errorHandlers from './utils/errorHandlers'
import ValidationMiddleware from './api/Middleware/ValidationMiddleware'
import limiter from './api/Middleware/rateLimiter'
import AuthController from './api/v2/Controllers/AuthController'
import verifyToken from './api/Middleware/verifyToken'
let app = express()

app.use(json())

app.use(ValidationMiddleware)

app.use('/api/v1/', v1router)


app.use('/api/auth/', AuthController) // only apply authentification to version 2

app.use(verifyToken) // middleware to verify token


app.use('/api/v2/', limiter) //only apply rate-limiter to version 2

app.use('/api/v2/', v2router)

if (app.get('env') === 'development')
    app.use(errorHandlers.notFound)

app.listen('8000', () => console.log("express listening on port 8000"))