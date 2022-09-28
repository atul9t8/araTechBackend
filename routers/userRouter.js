const express = require("express");
const router = express.Router();
const authorize = require("../middlewares/authorize");

const {registration, login, update} = require("../controllers/userController");

router.post('/registration', registration)
router.post('/login', login)
router.put('/update/:id', authorize, update)


module.exports = router