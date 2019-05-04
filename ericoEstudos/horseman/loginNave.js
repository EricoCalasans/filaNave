const Horseman = require('node-horseman');
const horsemanLogin = new Horseman({cookiesFile: 'cookieJar'});
const horsemanLoginVerif = new Horseman({cookiesFile: 'cookieJar'});
const horseman = new Horseman({cookiesFile: 'cookieJar'});

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
            logando(nome, senha)
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
    .wait(3000)
    .click('span[id="gatilho_espaco_5"]')
    .wait(3000)
    .html('body', 'pagLantTestes.html')
    .then(()=>{
        //console.log("pegou a pagina parça")
    })
    .close();

}


verifLogin('ericocalasans', 'erico485')
//logando('xxxxxxx', 'xxxxxxxx')
//logando('xxxxxxx', 'xxxxxxxx')
acessandoLantable();











    
    
    