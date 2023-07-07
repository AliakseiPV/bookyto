const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter.js')
const genreRouter = require('./genreRouter.js')
const bookRouter = require('./bookRouter.js')
const authorRouter = require('./authorRouter.js')

router.use('/user', userRouter)
router.use('/genre', genreRouter)
router.use('/book', bookRouter)
router.use('/author', authorRouter)


module.exports = router;

