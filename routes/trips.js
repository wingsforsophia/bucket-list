const router = require('express').Router()
const tripsCtrl = require('../controllers/trips')


//protected routes
router.use(require('../config/auth'));

router.get('/', checkAuth, tripsCtrl.index)
router.get('/:id', checkAuth, tripsCtrl.show)
router.post('/', checkAuth, tripsCtrl.create)
router.put('/:id', checkAuth, tripsCtrl.update)
router.delete('/:id', checkAuth, tripsCtrl.delete)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router