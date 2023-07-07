const Router = require('express')
const router = new Router()
const authorController = require('../controllers/authorController')

router.get('/', authorController.getBooks)
router.get('/', authorController.getEarned)

module.exports = router;
