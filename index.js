const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser =require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine","handlebars")
app.use(express.static("js"));


var nome = "-/ini/-";
var pc = "-/ini/-"

app.get("/form", function(req,res){
    
    res.render("formulario")
 
})

app.get("/fila", function(req,res){
    
    res.render("fila")
 
})

app.post("/redir", function(req,res){
    nome = req.body.usuario;
    pc = req.body.pc;

    //console.log(req.body.usuario+" foi");
    //console.log(req.body.pc+" foi");
    res.sendFile(__dirname + "/html/redir.html");
})

app.get("/js", function(req,res){
    
    res.sendFile(__dirname + "/js/mudartexto.js");
})

app.post("/volta", function(req,res){
    post.all().then(function(Posts){
        res.render("volta", {posts: Posts})

    })
    
})

// envio dados para fila -----------------------------
let getDados = () => {
    //O seu método de leitura do arquivo vem aqui
    return nome +"|"+ pc;
}

app.get('/dados', (req, res) => {
    res.send(getDados());
});
//----------------------------------------------------


app.listen(8081, function(){

    console.log("servidor rodando em http://localhost:8081");
});