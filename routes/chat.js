const router = require('express').Router();
const chatCtrl = require('../controllers/chat');

router.use(require("../config/auth"));
router.get("/messenger", checkAuth, chatCtrl.chatRoom);
router.post('/messenger', checkAuth, chatCtrl.postChat);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }
  

module.exports = router;