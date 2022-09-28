const express = require('express');
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin")
const {create, update, get} = require("../controllers/headerFooterController")
const router = express.Router()


router.post('/create', [authorize, admin], create)
router.put('/update', [authorize, admin], update)
router.get('/get', get)


module.exports = router;