const router = require('express').Router()
const itemsCtrl = require('../controllers/items')

router.post('/:id/items', itemsCtrl.create)

module.exports = router
