const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
    secret: "secret123",
    resave: false,
    saveUninitialized: true
}));

mongoose.connect("mongodb://127.0.0.1:27017/eduTrack");

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/courses",(req,res)=>{
    res.render("courses.ejs");
})
app.get("/dashboard",(req,res)=>{
    res.render("dashboard.ejs");
})
app.get("/leaderboard",(req,res)=>{
    res.render("leaderboard.ejs");
})



app.listen(8080, () => console.log("Server running"));