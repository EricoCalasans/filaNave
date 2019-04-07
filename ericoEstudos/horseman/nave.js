// Find the number of follower for each account. Spawns a new horseman for each user for faster results.
var Horseman = require('node-horseman');

var horseman = new Horseman

	horseman
		.open('https://san.navedoconhecimento.org.br')
        .text('.login-container  ')
        .then(function(text){
			console.log(text );
        })
        
		
    
    //horseman
        .open('https://san.navedoconhecimento.org.br')
        .html(".login-container","testando")
        .then((html)=>{
            console.log(html)
        })
        .close();
