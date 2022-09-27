const sql = require('../controllers/db');
const fs = require('fs');
const path = require('path');

const Product = function(product){
    this.name = product.name;
    this.price = product.price;
    this.details = product.details;
    this.description = product.description;
    this.specifications = product.specifications;
    this.stock = product.stock;
    this.category = product.category;
    this.subcategory = product.subcategory;
    this.subsubcategory = product.subsubcategory;
    this.image = product.image;
    // this.reviews = product.reviews;
    this.tags = product.tags;
}

Product.create = (newProduct, result)=>{
    sql.query("INSERT INTO products SET ?", newProduct, (err, res)=>{
        if(err){
            result(err)
        }else{
            result(newProduct)
        }
    })
}

Product.getAllProduct = (result)=>{
    sql.query("SELECT * FROM products ORDER BY id DESC", (err, res)=>{
        if(err){
            result(err)
        }else{
            result(res)
        }
    })
}


Product.deleteById = (id, result)=>{
    sql.query("SELECT * FROM products WHERE id=?", id, (err, res)=>{
        if(err){
            result(err)
        }else{
            if(res.length > 0){

                fs.unlinkSync("Gallery/productImage/"+`${res[0].image}`)
                        sql.query("DELETE FROM products WHERE id=?", id, (err, res)=>{
                            if(err){
                                result(err)
                            }else{
                                result("Deleted!")
                            }
                        })
                    }
            else{
                result("No Images Found!")
            }
        }
    })
}

Product.findById = (id, result)=>{
    sql.query("SELECT * FROM products WHERE id=?", id, (err, res)=>{
        if(err){
            result(err)
        }else{
            result(res)
        }
    })
}

Product.findByCategory = (category, result)=>{
    sql.query("SELECT * FROM products WHERE category= ?", category, (err, res)=>{
        if(err){
            result(err)
        }else{
            result(res)
        }
    })
}

Product.findBySubcategory = (category, result)=>{
    sql.query("SELECT * FROM products WHERE category= ? AND subcategory= ?", category, (err, res)=>{
        if(err){
            result(err)
        }else{
            result(res)
        }
    })
}

Product.findBySubsubcategory = (category, result)=>{
    sql.query("SELECT * FROM products WHERE category= ? AND subcategory= ? AND subsubcategory= ?", category, (err, res)=>{
        if(err){
            result(err)
        }else{
            result(res)
        }
    })
}

// Gallery.deleteById = (id, result)=>{
//     sql.query("SELECT * FROM gallery WHERE id=?", id, (err, res)=>{
//         if(err){
//             result(err)
//         }else{
//             if(res.length > 0){

//                 fs.unlinkSync("Gallery/"+`${res[0].name}`)
//                         sql.query("DELETE FROM gallery WHERE id=?", id, (err, res)=>{
//                             if(err){
//                                 result(err)
//                             }else{
//                                 result("Deleted!")
//                             }
//                         })
//                     }
//             else{
//                 result("No Images Found!")
//             }
//         }
//     })
// }
module.exports = Product;