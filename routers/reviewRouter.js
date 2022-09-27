const express = require('express');
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin")
const { createReview, getReview } = require("../controllers/reviewController")
const router = express.Router()


router.post('/create', createReview)
router.get('/getReviews/:id', getReview)
// router.get('/image', [authorize, admin], getImage)
// router.delete('/delete', [authorize, admin], deleteImage)


module.exports = router;