const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser =require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine","handlebars")


app.get("/form", function(req,res){
    
    res.render("form")
})

app.post("/volta", function(req,res){
    post.all().then(function(Posts){
        res.render("volta", {posts: Posts})

    })
    
})



app.listen(8080, function(){

    console.log("servidor rodando parça nessa url aqui irmão http://localhost:8080");
});