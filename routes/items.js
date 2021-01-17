const router = require('express').Router()
const itemsCtrl = require('../controllers/items')

router.post('/:id/items', itemsCtrl.create)
router.get('/:id/items', itemsCtrl.index)
router.put('/:id/items/:itemId', itemsCtrl.update)

module.exports = router
