const sql = require('../controllers/db')

const User = function(user){
    this.email = user.email;
    this.password = user.password;
};

User.create = (newUser, result)=>{
    sql.query("INSERT INTO userinfo SET ?", newUser, (err, res)=>{
        if(err){
            console.log(err);
            result(err, null);
            return;
        }
        console.log("created data")
    })
}


module.exports = User;