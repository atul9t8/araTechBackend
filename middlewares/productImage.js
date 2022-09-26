const multer = require("multer");

    let storage = multer.diskStorage({
        destination: function(req, file, callBack){
            callBack(null, "Gallery/productImage");
        },
        filename: function(req, file, callBack){
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            callBack(null, `${uniqueSuffix}-${file.originalname}`)
        }
    })
    let fileFilter = (req, file, callBack)=>{
        if(file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png"){
                callBack(null, true)
        } else{
            callBack(null, false)
        }
    }

    module.exports = multer({
        storage : storage,
        limits:{
            fileSize: 1024*1024*5
        },
        fileFilter : fileFilter
    }).single('image')