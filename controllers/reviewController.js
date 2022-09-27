const express = require("express");
const Review = require("../models/reviewModel");

module.exports.createReview = async(req, res)=>{
    // let newReview = req.body
    Review.create(req.body, (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}


module.exports.getReview = async(req, res)=>{
    // let newReview = req.body
    Review.findById(req.params.id, (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}