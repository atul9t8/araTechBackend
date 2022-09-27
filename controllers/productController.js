const express = require("express");
const multer = require("multer");
const Product = require("../models/productModel");
const upload = require("../middlewares/productImage");

module.exports.createProduct = async(req, res)=>{
    upload(req, res, function(err){
        if(err instanceof multer.MulterError){
            res.send(err)
        } else if(err){
            res.send(err)
        }
        const product = new Product({
            name : req.body.name,
            price: req.body.price,
            details: req.body.details,
            description: req.body.description,
            specifications: JSON.stringify(req.body.specifications),
            stock: req.body.stock,
            category: req.body.category,
            subcategory: req.body.subcategory,
            subsubcategory: req.body.subsubcategory,
            image: req.file.filename,
            tags: req.body.tags
        })
        Product.create(product, (err, data)=>{
            if(err){
                res.send(err)
            }else{
                res.send(data)
            }
        })
    })
}

module.exports.getProducts = async(req, res)=>{
    Product.getAllProduct((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

module.exports.deleteById = async(req, res)=>{
    Product.deleteById(req.body.id, (err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

module.exports.findById = async(req, res)=>{
    Product.findById(req.params.id, (err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}


module.exports.findByCategory = async(req, res)=>{
    Product.findByCategory(req.params.category, (err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}


module.exports.findBySubcategory = async(req, res)=>{
    let category = req.params.category;
    let subcategory = req.params.subcategory;
    Product.findBySubcategory([category, subcategory], (err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

module.exports.findBySubsubcategory = async(req, res)=>{
    let category = req.params.category;
    let subcategory = req.params.subcategory;
    let subsubcategory = req.params.subsubcategory;
    Product.findBySubsubcategory([category, subcategory, subsubcategory], (err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

// module.exports.findById = async(req, res)=>{
//     Product.findById(req.params.id, (err,data)=>{
//         if(err){
//             res.send(err)
//         }else{
//             res.send(data)
//         }
//     })
// }