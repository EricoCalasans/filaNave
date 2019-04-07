const webPage = require('webpage')
const page = webPage.create()

page.viewportSize = {
    width: 1024,
    height: 720
};
page.open("https://google.com",function(status)  {

    
    console.log("status: " + status)
    console.log(page['objectName'])
    console.log(page['title'])
    console.log(page['url'])


    if(status === 'success'){
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
});
