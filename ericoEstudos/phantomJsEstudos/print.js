const phantom = require('phantom')

const takeSreenshot = async(url , name) =>{
    const instance = await phantom.create()
    const page = await instance.createPage()

    const status = await page.open(url)
    console.log(status)

    const content = await page.property('content')
    console.log(content)

    await page.render(name + '.png')

    await instance.exit()
}

//takeSreenshot('https://google.com', "google")
//takeSreenshot('https://facebook.com/', "face")
//takeSreenshot('https://san.navedoconhecimento.org.br/', "SAN")






/*
//const webpage = require('webpage')
//const webpage = phantom.webpage;


var page = phantom.create()

console.log("flag")

page.open('http://google.com', function(status){
    console.log(page['objectName'])
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
})

phantom.exit()

*/