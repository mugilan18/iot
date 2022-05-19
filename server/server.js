const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');

url = "mongodb+srv://test101:email712pa@cluster0.q1aco.mongodb.net/Sewage?retryWrites=true&w=majority"
const app = express()
const Test1Schema = require("./User");
app.use(cors() );
app.use(express.json())
mongoose
  .connect(url, {
    
    keepAlive: true,
    socketTimeoutMS: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb successfully connected"))
  .catch((err) => console.error(err));
  
// app.set("view engine","ejs")

app.get("/",async(req,res)=>{
  // res.send("index.html")
  const user = await Test1Schema.find().sort({_id:-1}).limit(450);
  console.log(user)
res.json(user.reverse())
});









app.listen(4000,()=>{
  console.log("lisiterning to port 4000")
})