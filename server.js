

const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<h1>Hello, World!..</h1>");
});

app.get("/contact", function(req,res){
    res.send("Contact me at Teyjas@gmail.com");
})

app.get("/about",function(req,res){
    res.send("I am Teyjas, a Web Developer.");
})

app.listen(3000, function(){
    console.log("Server has started on Port 3000");
});