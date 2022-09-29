const sql = require('../controllers/db');


const Category = function(category){
    this.name = category.name;
    // this.password = user.password;
};

Category.create=(newCategory, result)=>{
    sql.query("INSERT INTO category SET ?", newCategory, (err, res)=>{
        if(err){
            result(err)
        }else{
            result(null ,newCategory)
        }
    })
}