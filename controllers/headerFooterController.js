const express = require("express");
const HeaderInfo = require("../models/headerFooterModel")


module.exports.create = async(req, res)=>{
    HeaderInfo.create(req.body, (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}


module.exports.get = async(req, res)=>{
    HeaderInfo.get((err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

module.exports.update = async(req, res)=>{
    HeaderInfo.update([req.body, 1], (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

