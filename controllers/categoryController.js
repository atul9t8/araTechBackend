const express = require("express");
const Category = require("../models/categoryModel");


module.exports.createCategory = async(req, res)=>{

    let newCategory = {
        name: req.body.name
    }
    Category.create(newCategory, (err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}