// Requires
var express = require("express");

// Set app
var app = express();

app.set("view engine", "ejs");

// routes
app.get("/", (req, res)=>{
    res.render("home");
})

// Listen
app.listen("8000", ()=> console.log("You're listening to the smooth sounds of port 8000"));