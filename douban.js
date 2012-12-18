var page = require('webpage').create();
var Encoding = require('./iconv-lite/index');

    page.open('http://news.baidu.com/', 

    function (status) {
		    if (status !== 'success') {
		        console.log('Unable to access network');
		    } else {
		        console.log("I am OK.....");
		        //console.log(page.content)
		        var content=Encoding.decode(page.content,'GBK');
		        //remove any tags
		        var result = content.replace(/<(?:.|\s)*?>/g, "");
		        console.log(result);
		        
		    }//End of if
	    //console.log(page.content);
	    
	    phantom.exit();
	});
