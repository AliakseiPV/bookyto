const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter.js')
const genreRouter = require('./genreRouter.js')
const bookRouter = require('./bookRouter.js')
const sellerRouter = require('./sellerRouter.js')

router.use('/user', userRouter)
router.use('/genre', genreRouter)
router.use('/book', bookRouter)
router.use('/seller', sellerRouter)


module.exports = router;

