import rateLimit from "express-rate-limit"


const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100, // limit each IP to 20 requests per 5 minutes
    message: 'Exceeded maximum number of requests, please try again later.'
});

export default limiter