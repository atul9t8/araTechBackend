const express = require("express");
const multer = require("multer");
const Product = require("../models/productModel");
const upload = require("../middlewares/productImage");
const fs = require('fs');
const path = require('path');
const formidable = require("formidable");
const e = require("express");
// const sql = require('./db');


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

module.exports.updateProductImage = async(req, res)=>{

            upload(req, res, function(err){
                if(err instanceof multer.MulterError){
                    console.log(req.file)
                } else if(err){
                    res.send(err)
                } 
                let newImage = req.file.filename;
                Product.findImageForUpdate(req.params.id, (err, data)=>{
                    if(err){
                        res.send(err)
                    }else{
                        let image = data;
                        console.log(image)
                        fs.unlink('Gallery/productImage/'+`${image}`, err=>{
                            if(err){
                                res.send(err)
                            }
                        })
                        Product.imageUpdate([newImage, req.params.id], (err, data)=>{
                            if(err){
                                res.send(err)
                            }else{
                                res.send(data)
                            }
                        })
                    }
                })
                // res.json(res)
                // if(req.file.filename){
                //     res.send(req.file.filename)
                // }else{
                //     res.send("none")
                // }

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