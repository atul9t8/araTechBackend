const sql = require('../controllers/db');
const jwt = require("jsonwebtoken")


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
                    const token = jwt.sign({id: newUser.id, email: newUser.email}, process.env.OCEAN_BLUE)

                    console.log("created data")
                    result(token)
                    }
                )
            }
        }
    })

}

User.checkExistingEmail = (newEmail, result)=>{

}


module.exports = User;