const express = require('express');
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin")
const {create, getAllOrder, getAllOrderByEmail, updateStatus} = require("../controllers/orderController")
const router = express.Router()


router.post('/checkout', create)
router.get('/getAllOrder',[authorize, admin], getAllOrder)
router.get('/seeOrder', getAllOrderByEmail)
router.put('/updateStatus', updateStatus)



module.exports = router;