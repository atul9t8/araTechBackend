const express = require('express');
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin")
const {createProduct, getProducts, updateProductImage, updateProductInfo, deleteById, findBySingleValue, findByCategory,
    findBySubcategory, findBySubsubcategory} = require("../controllers/productController")
const router = express.Router()


router.get('/', getProducts)
router.get('/searchedProduct', findBySingleValue)
router.get('/productCategory/:category', findByCategory)
router.get('/productCategory/:category/:subcategory', findBySubcategory)
router.get('/productCategory/:category/:subcategory/:subsubcategory', findBySubsubcategory)
router.post('/create', [authorize, admin], createProduct)
router.delete('/delete', [authorize, admin], deleteById)
router.put('/updateImage/:id', [authorize, admin], updateProductImage)
router.put('/updateInfo/:id', [authorize, admin], updateProductInfo)

// router.delete('/delete', [authorize, admin], deleteImage)


module.exports = router;