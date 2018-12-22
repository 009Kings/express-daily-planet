// Requires
var express = require("express");
var layouts = require("express-ejs-layouts");
var db = require("./models");
var bodyparser = require("body-parser");

// Set app
var app = express();

app.set("view engine", "ejs");

// Uses
app.use(layouts);
app.use(express.static('static'));
app.use(bodyparser.urlencoded({ extended: false }));

// routes
app.get("/", (req, res)=>{
    res.render("site/home");
})

app.get('/about', (req, res) => {
    res.render("site/about");
});

app.get('/contact', (req, res) => {
    res.render("site/contact");
});

// articles
app.get('/articles', (req, res) => {
    db.article.findAll().then((article)=>{
         res.render("articles/index", {articles: article});
    });
   
});

app.get('/articles/new', (req, res) => {
    res.render("articles/new");
});

app.post('/articles', (req, res) => {
    db.article.create({
        title: req.body.title,
        body: req.body.body
    }).then((data)=>{
        res.redirect("/articles");
    }).catch((error)=>{
        console.log("You fucked: ", error);
    })
});

app.get('/articles/:id', (req, res) => {
    db.article.findById(req.params.id).then((article)=>{
        res.render("articles/show", {article: article});
   }).catch((err)=>{
       console.log("You fucked, ", err);
   });
});

// Listen
app.listen("8000", ()=> console.log("♨︎ You're listening to the smooth sounds of 🎶 port 8000 ☕️ ♨︎ 🍵"));