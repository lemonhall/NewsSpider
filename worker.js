var page = require('webpage').create();
page.open('http://localhost:8000/tasks/', function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var ua = page.evaluate(function () {
            return document.title;
        });
        console.log(ua);
    }
    console.log(page.content);
    phantom.exit();
});