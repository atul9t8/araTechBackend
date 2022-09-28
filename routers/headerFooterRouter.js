const express = require('express');
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin")
const {create, update} = require("../controllers/headerFooterController")
const router = express.Router()


router.post('/create', [authorize, admin], create)
router.put('/update', [authorize, admin], update)


module.exports = router;