const Router = require('express')
const router = new Router()
const bookController = require('../controllers/bookController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('Seller'), bookController.create)
router.get('/', bookController.getAll)
router.get('/:id', bookController.getOne)

module.exports = router;

