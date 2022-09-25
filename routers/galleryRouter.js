const express = require('express');
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin")
const {uploadImage, getImage, deleteImage} = require("../controllers/galleryController")
const router = express.Router()


router.post('/create', [authorize, admin], uploadImage)
router.get('/image', [authorize, admin], getImage)
router.delete('/delete', [authorize, admin], deleteImage)


module.exports = router;