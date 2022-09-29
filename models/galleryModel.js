const sql = require('../controllers/db');
const fs = require('fs');
const path = require('path');

const Gallery = function(gallery){
    this.image = gallery.image
    this.imagePath = gallery.imagePath
}

Gallery.create = (newImage, result)=>{
    sql.query("INSERT INTO gallery SET ?", newImage, (err, res)=>{
        if(err){
            result(err)
        }else{
            result({imageId : res.insertId,
                image : newImage})
        }
    })
}

Gallery.getAllImage = (result)=>{
    sql.query("SELECT * FROM gallery ORDER BY id DESC", (err, res)=>{
        if(err){
            result(err)
        }else{
            result(null, res)
        }
    })
}
Gallery.findById = (id, result)=>{
    sql.query("SELECT * FROM gallery WHERE id=?", id, (err, res)=>{
        if(err){
            result(err)
        }else{
            result(null, res)
        }
    })
}

Gallery.deleteById = (id, result)=>{
    sql.query("SELECT * FROM gallery WHERE id=?", id, (err, res)=>{
        if(err){
            result(err)
        }else{
            if(res.length > 0){

                fs.unlinkSync("Gallery/galleryImage/"+`${res[0].name}`)
                        sql.query("DELETE FROM gallery WHERE id=?", id, (err, res)=>{
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
module.exports = Gallery;