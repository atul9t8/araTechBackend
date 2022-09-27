const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
// const bodyParser = require("body-parser")
const userRouter = require("./routers/userRouter")
const galleryRouter = require("./routers/galleryRouter")
const productRouter = require("./routers/productRouter")
const ReviewRouter = require("./routers/reviewRouter")
const app = express();

require('dotenv').config()


app.use(cors())
app.use(express.json())
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 


app.use('/user', userRouter)
app.use('/gallery', galleryRouter)
app.use('/products', productRouter)
app.use('/review', ReviewRouter)


port = process.env.PORT || 8088
app.listen(port, ()=> console.log("Listening")) 