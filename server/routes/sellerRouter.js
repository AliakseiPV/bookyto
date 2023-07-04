const Router = require('express')
const router = new Router()
const sellerController = require('../controllers/sellerController')

router.get('/', sellerController.getBooks)
router.get('/', sellerController.getEarned)

module.exports = router;
