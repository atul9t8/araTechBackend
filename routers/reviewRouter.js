const express = require('express');
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin")
const { createReview } = require("../controllers/reviewController")
const router = express.Router()


router.post('/create', createReview)
// router.get('/image', [authorize, admin], getImage)
// router.delete('/delete', [authorize, admin], deleteImage)


module.exports = router;