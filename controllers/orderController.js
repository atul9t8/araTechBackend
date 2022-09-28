const express = require("express");
const Order = require("../models/orderModel")


module.exports.create = async(req, res)=>{
    Order.create(req.body, (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

module.exports.getAllOrder = async(req, res)=>{
    Order.getAllOrder("delivered", (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

module.exports.getAllOrderByEmail = async(req, res)=>{
    Order.getAllOrderByEmail(req.body.email, (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}
module.exports.updateStatus = async(req, res)=>{
    Order.updateStatus([req.body.status, req.body.id], (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}