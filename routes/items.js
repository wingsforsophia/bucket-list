const router = require('express').Router()
const itemsCtrl = require('../controllers/items')

router.post('/:id/items', itemsCtrl.create)
router.get('/:id/items', itemsCtrl.index)

module.exports = router
