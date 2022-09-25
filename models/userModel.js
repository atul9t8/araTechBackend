const sql = require('../controllers/db');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')


const User = function(user){
    this.email = user.email;
    this.password = user.password;
};

User.create = (newUser, result)=>{
    sql.query("SELECT * FROM userinfo WHERE email = ?", newUser.email, (err, res)=>{
        if(err){
            console.log("Exixting Email Error: ", err)
            return;
        }else{
            if(res.length){
                console.log(res.length);
                result("Email Already Exists!")
            }else{
                sql.query("INSERT INTO userinfo SET ?", newUser, (err, res)=>{
                    if(err){
                        console.log(err);
                        result(err, null);
                        return;
                    }
                    const token = jwt.sign({id: res.insertId, email: newUser.email}, process.env.OCEAN_BLUE)

                    // console.log("created data")
                    result(token)
                    }
                )
            }
        }
    })

}

User.login = (user, result)=>{
    sql.query("SELECT * FROM userinfo WHERE email = ?", user.email, (err, res)=>{
        if(err){
            console.log("Exixting login Email Error: ", err)
            return;
        }else{
            if(res.length >0){
                bcrypt.compare(user.password, res[0].password).then(function(check){
                    if(check == true){
                        console.log(check)
                        const token = jwt.sign({id: res[0].id, email: res[0].email, role:res[0].role}, process.env.OCEAN_BLUE)
                        result(token)
                    }else{
                        result("Invalid Email or Password!")
                    }
                })
            }else{
                result("No account found!")
            }
        }
    })
}


module.exports = User;