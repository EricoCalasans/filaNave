var Horseman = require('node-horseman');
var horsemanLogin = new Horseman({cookiesFile: 'cookieJar'});
var horsemanLoginVerif = new Horseman({cookiesFile: 'cookieJar'});
var horseman = new Horseman({cookiesFile: 'cookieJar'});

var fs = require('fs');

 //cookieJar = '';



//var cookieJar;


var verifLogin = (nome,senha) => {
    horsemanLoginVerif
    .cookies()
    .open('https://san.navedoconhecimento.org.br')
    .html('.login-container').then((html) => {

        if(html === undefined){
            console.log("esta logado")
        }else{
            console.log("não esta logado")
            //logando(nome,senha)
        }
        console.log("flag1")
        

    })
    .close()
    
    

    
}


var logando = (nome, senha) => {
    horsemanLogin
    .cookies()
    .open('https://san.navedoconhecimento.org.br')
    //.html('body', 'login.html')
    //.log()
    .type('input[name="username"]', nome)
    .type('input[name="password"]', senha)
    .click('button[class="btn btn-large btn-block"]')
    .waitForNextPage()
    .wait(1000)
    .cookies()
    .close()
}


function acessandoLantable(){
   
    horseman
    
    //.cookies()
    //.wait(2000)
    .open('https://san.navedoconhecimento.org.br/admin/espaco/index')
    .html('body', 'zeca')
    .then(()=>{
        //console.log("pegou a pagina parça")
    })
    .close();

}


verifLogin('xxxxxxx', 'xxxxxxxx')
//logando('xxxxxxx', 'xxxxxxxx')
//logando('xxxxxxx', 'xxxxxxxx')
//acessandoLantable();











    
    
    