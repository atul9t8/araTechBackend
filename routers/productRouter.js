const express = require('express');
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin")
const {createProduct, getProducts, deleteById, findById, findByCategory,
    findBySubategory} = require("../controllers/productController")
const router = express.Router()


router.get('/', getProducts)
router.get('/:id', findById)
router.get('/productCategory/:category', findByCategory)
router.get('/productCategory/:category/:findBySubategory', findByCategory)
router.post('/create', [authorize, admin], createProduct)
router.delete('/delete', [authorize, admin], deleteById)

// router.delete('/delete', [authorize, admin], deleteImage)


module.exports = router;