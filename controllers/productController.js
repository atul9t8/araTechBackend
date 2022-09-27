const express = require("express");
const multer = require("multer");
const Product = require("../models/productModel");
const upload = require("../middlewares/productImage");
const fs = require('fs');
const path = require('path');
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

module.exports.updateProduct = async(req, res)=>{
    Product.findImageFroUpdate(req.params.id, (err, data)=>{
        if(err){
            res.send(err)
        }else{
            let image = data[0].image;
            
                if(req.file){
                    let image = {
                        image : image
                    }
                    upload(req, res, function(err){
                        if(err instanceof multer.MulterError){
                            res.send(err)
                        } else if(err){
                            res.send(err)
                        }
                    })
                    let body = req.body

                            Product.update([image, body],req,params.id, (err, data)=>{
                                if(err){
                                    res.send(err)
                                }else{
                                    fs.unlinkSync("Gallery/productImage/"+`${image}`, (err)=>{
                                        if(err){
                                            res.send("Image unlink error!!")
                                        }else{
                                            res.send(data)
                                        }
                                    })
                                }
                            })

                        // }
                    // })

                    // req.file.filename
                    // req.body
                }else{
                    console.log("file not found")
                }
                // const product = new Product({
                //     name : req.body.name,
                //     price: req.body.price,
                //     details: req.body.details,
                //     description: req.body.description,
                //     specifications: JSON.stringify(req.body.specifications),
                //     stock: req.body.stock,
                //     category: req.body.category,
                //     subcategory: req.body.subcategory,
                //     subsubcategory: req.body.subsubcategory,
                //     image: req.file.filename,
                //     tags: req.body.tags
                // })
                // Product.create(product, (err, data)=>{
                //     if(err){
                //         res.send(err)
                //     }else{
                //         res.send(data)
                //     }
                // })
            // })
        }
    })
    // Product.getAllProduct((err,data)=>{
    //     if(err){
    //         res.send(err)
    //     }else{
    //         res.send(data)
    //     }
    // })
    // if(req.file){
        // console.log(req.file["image"])
    // }else{
        // res.send("not Found!!")
    // }
    // upload(req, res, function(err){
    //     if(err instanceof multer.MulterError){
    //         res.send(err)
    //     } else if(err){
    //         res.send(err)
    //     }
    //     if(req.file.filename){
    //         // req.file.filename
    //         // req.body
    //     }else{
    //         console.log("file not found")
    //     }
    //     // const product = new Product({
    //     //     name : req.body.name,
    //     //     price: req.body.price,
    //     //     details: req.body.details,
    //     //     description: req.body.description,
    //     //     specifications: JSON.stringify(req.body.specifications),
    //     //     stock: req.body.stock,
    //     //     category: req.body.category,
    //     //     subcategory: req.body.subcategory,
    //     //     subsubcategory: req.body.subsubcategory,
    //     //     image: req.file.filename,
    //     //     tags: req.body.tags
    //     // })
    //     // Product.create(product, (err, data)=>{
    //     //     if(err){
    //     //         res.send(err)
    //     //     }else{
    //     //         res.send(data)
    //     //     }
    //     // })
    // })
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