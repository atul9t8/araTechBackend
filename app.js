const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser")
const userRouter = require("./routers/userRouter")
const galleryRouter = require("./routers/galleryRouter")
const app = express();

require('dotenv').config()


app.use(cors())
app.use(express.json())
// app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/gallery', galleryRouter)


port = process.env.PORT || 8088
app.listen(port, ()=> console.log("Listening")) 