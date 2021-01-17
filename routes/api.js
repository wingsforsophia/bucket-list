const router = require("express").Router();
const apiCtrl = require("../controllers/api");


/*---------- Public Routes ----------*/
router.get('/search', apiCtrl.searchPlaces)


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));




function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}


module.exports = router;
