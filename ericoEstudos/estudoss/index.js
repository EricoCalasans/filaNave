const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
//mysql--------------------------------------------------------------------
const sequelize = new Sequelize("testandomy", "root", "@Erico123", {
    host: "localhost",
    dialect: "mysql"
});
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso ao mysql!")
}).catch(function(erro){
    console.log("falha ao se conectar ao mysql: " + erro)
})
//-------------------------------------------------------------------------
//conig templete engine ----------------------------------------------------
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars"); 
//--------------------------------------------------------------------------
//body parser-------------------------------------------------------------
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

//---------------------------------------------------------------------------




var tituloNave = "  esta indo  ";
var conteudoNave = "   foi mesmo ";




app.get('/cad', function(req, res){
    res.render('formulario')
})

app.get('/teste2', function(req, res){
    res.render('testando')
})

app.post('/add', function(req, res){
    //res.send("texto: "+req.body.titulo + " Conteudo " + req.body.conteudo);

    
    res.send("texto: "+tituloNave + " Conteudo " + conteudoNave);
    
});
app.post("/redir", function(req,res){
    tituloNave = req.body.titulo;
    conteudoNave = req.body.conteudo;

    
    res.sendFile(__dirname + "/html/redir.html");
})


app.use(express.static("js"));
//app.use(express.static("views"));

app.get("/pag", function(req,res){
    
    res.sendFile(__dirname + "/html/index.html");
})

app.get("/teste", function(req,res){

    res.send("texto: "+tituloNave + " Conteudo " + conteudoNave);
    
})

let getDados = () => {
    //O seu método de leitura do arquivo vem aqui
    return tituloNave +"|"+ conteudoNave;
}

app.get('/dados', (req, res) => {
    res.send(getDados());
});

app.get("/js", function(req,res){
    
    res.sendFile(__dirname + "/js/mudartexto.js");
})


//linha final, aviso de servidor rodando-----------------------
app.listen(8081, function(){

    console.log("servidor rodando parça nessa url aqui irmão http://localhost:8081");
});