// Requires
var express = require("express");

// Set app
var app = express();

app.set("view engine", "ejs");

// routes
app.get("/", (req, res)=>{
    res.render("home");
})

app.get('/articles', (req, res) => {
    res.render("articles/index");
});

app.get('/articles/new', (req, res) => {
    res.render("articles/new");
});

app.post('/articles', (req, res) => {
    res.redirect("/articles");
});

app.get('/articles/:id', (req, res) => {
    res.render("articles/show", {id: req.params.id});
});

// Listen
app.listen("8000", ()=> console.log("You're listening to the smooth sounds of port 8000"));