const express = require("express");
const userRouter = require("./routers/userRouter")
const app = express();

require('dotenv').config()



app.use(express.json())

app.use('/user', userRouter)



port = process.env.PORT || 8088

app.listen(port, ()=> console.log("Listening")) 