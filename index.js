const express = require('express')
const mongoose = require('mongoose')
const app = express()
const route = require("./src/routes/route")

app.use(express.json())

mongoose.connect("mongodb+srv://rhutvik-patel:jiCI0diV4CDbN9Pr@cluster0.afbog.mongodb.net/OrderManagement", { useNewUrlParser: true })
.then(() => console.log("MongoDb is Connected..."))
.catch(err => console.log(err))

app.use("/",route)

app.listen(3000, ()=>{
    console.log("Express App Running On Port 3000")
})