const express = require('express');
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin")
const {createProduct, getProducts, deleteById, findById, findByCategory,
    findBySubcategory, findBySubsubcategory} = require("../controllers/productController")
const router = express.Router()


router.get('/', getProducts)
router.get('/:id', findById)
router.get('/productCategory/:category', findByCategory)
router.get('/productCategory/:category/:subcategory', findBySubcategory)
router.get('/productCategory/:category/:subcategory/:subsubcategory', findBySubsubcategory)
router.post('/create', [authorize, admin], createProduct)
router.delete('/delete', [authorize, admin], deleteById)

// router.delete('/delete', [authorize, admin], deleteImage)


module.exports = router;