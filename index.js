const express = require("express");
const app= express()
const cors = require("cors"); // this is used to link backend to frontend 
const router = require("./router/router");

app.use(cors());
app.use("/",router);

app.get("/",(req,res)=>{
    res.send("Home Page")
})


app.listen(9000,console.log("server is running"))