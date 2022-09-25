const express = require("express");
const User = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


module.exports.registration = async(req, res)=>{
    if(req.body.email){
        if(req.body.password === req.body.cPassword){
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                password = hash;
                const user = new User({
                    email: req.body.email,
                    password: hash
                    }
                )
                User.create(user, (err, data)=>{
                    if(err){
                        res.send(err)
                    }else{
                        res.send(data)
                    }
                    }
                )
            })
        }else{
            res.send("Password and Confirm password doesn't match!")
        }
        
    }else{
        res.send("Enter an email address")
    }
}


module.exports.login = async(req, res)=>{
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    User.login(user, (err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

// module.exports = {registration, login}