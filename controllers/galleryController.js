const express = require("express");
const multer = require("multer");
const Gallery = require("../models/galleryModel");
const upload = require("../middlewares/multer")

module.exports.uploadImage = async(req, res)=>{
    
    upload(req, res, function(err){
        if(err instanceof multer.MulterError){
            res.send(err)
        } else if(err){
            res.send(err)
        }
        Gallery.create(req.file.filename, (err, data)=>{
            if(err){
                res.send(err)
            }else{
                res.send(data)
            }
        })
    })
}
module.exports.getImage = async(req, res)=>{
    Gallery.findById(req.body.id, (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

module.exports.deleteImage = async(req, res)=>{
    Gallery.deleteById(req.body.id, (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}