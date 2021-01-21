const router = require('express').Router()
const itemsCtrl = require('../controllers/items')

//protected routes
router.use(require('../config/auth'));

router.post('/:id/items', itemsCtrl.create)
router.get('/:id/items', itemsCtrl.index)
router.put('/:id/items/:itemId', itemsCtrl.update)
router.delete('/:id/items/:itemId', itemsCtrl.delete)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router
