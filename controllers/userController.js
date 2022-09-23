const express = require("express");
const mysql = require('mysql');
const db = require('./config');

// // config.connect(function(err){
// //     if(err){
// //             console.log(err)
// //     }else{
// //         console.log("set")
// //     }
// // });

// //registration

const registration = async(req, res)=>{
    if(req.body.email){
        let reqEmail = {
            email : req.body.email
        }

        let query = "SELECT * FROM `userinfo` WHERE ?"

        db.connect(query, reqEmail, function(err, result){
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
    }
}

// module.exports = {registration}

module.exports = registration