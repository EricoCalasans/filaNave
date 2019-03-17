const express = require("express");
const app = express();


app.get("/", function(req,res){
    
    res.send("funcionando");
})

app.get("/teste", function(req,res){
    res.send("teste fundionando");
    
})


app.listen(8081, function(){

    console.log("servidor rodando parça nessa url aqui irmão http://localhost:8081");
});