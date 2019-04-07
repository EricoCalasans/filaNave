var Horseman = require('node-horseman');
var horseman = new Horseman({timeout: 30000});

horseman
    .open('https://san.navedoconhecimento.org.br')
    //.html()
    //.log()
    .type('input[name="username"]', 'ericocalasans')
    .type('input[name="password"]', 'erico485')
    .click('button[class="btn btn-large btn-block"]')
    .waitForNextPage()
    .wait(1000)
    .open('https://san.navedoconhecimento.org.br/admin/espaco/index')
    //.html("html","testando")
    .html()
        .then((html)=>{
            console.log(html)
        })
    .close();