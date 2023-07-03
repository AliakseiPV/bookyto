const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter.js')
const genreRouter = require('./genreRouter.js')
const bookRouter = require('./bookRouter.js')

router.use('/user', userRouter)
router.use('/genre', genreRouter)
// router.use('/book', bookRouter)


module.exports = router;

