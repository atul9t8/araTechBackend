const express = require("express");
const User = require("../models/userModel")

const registration = async(req, res)=>{
    if(req.body.email){
        const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    User.create(user, (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    }) 
    }else{
        res.send("Enter an email address")
    }

}

module.exports = registration