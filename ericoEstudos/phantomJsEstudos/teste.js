const webPage = require('webpage')
const page = webPage.create()

//var page = require("webpage").create();
//define o viewport da tela
page.viewportSize = {
    width: 1024,
    height: 720
};
//abre a url
page.open("http://victorvhpg.github.io/", function(status)  {
    console.log("status " + status)

    if (status !== "success") {
        console.log("erro ao acessar página");
    } else {
        //links na página
        var listLink = page.evaluate(function() {
            var list = [];
            var links = document.querySelectorAll("a");
            //para cada link coloca o indice dele do lado em vermelho
            [].forEach.call(links, function(item, i) {
                item.innerHTML += "<span style='color:red;font-size:11px'> [" + item.href + "]</span>";
                list.push(item.href);
            });
            document.body.innerHTML = [
                "<ul>",
                    list.map(function(item, indice) {
                        return "<li>" + item + "</li>";
                    }).join(""),
                "</ul>",
                "<hr />",
                document.body.innerHTML
            ].join("");
            //retorna a lista de links
            return list;
        });
        console.log(listLink);
        //renderiza  apagina
        page.render("pagina.png");
    }
    phantom.exit();
});

/*
page.open('https://google.com', (status) =>{
    

    /*console.log(page['objectName'])
    console.log(page['title'])
    console.log(page['url'])


    cons.log("status: " + status)

    if(status==="sucess"){
        page.render('screenCapture1.jpeg', {
            format: 'jpeg',
            quality: '0'
        })
        page.render('screenCapture2.jpeg', {
            format: 'jpeg',
            quality: '25'
        })
        page.render('screenCapture3.jpeg', {
            format: 'jpeg',
            quality: '50'
        })
        page.render('screenCapture4.jpeg', {
            format: 'jpeg',
            quality: '75'
        })
        page.render('screenCapture5.jpeg', {
            format: 'jpeg',
            quality: '100'
        })
    }
    phantom.exit()
    
}).then(() => {
    console.log("funcionou")
}).catch((err) => {
    console.log("nao foi: " + err)
    phantom.exit()
})*/





