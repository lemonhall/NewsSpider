
var getNews =function(){
	console.log('Getting the baidu news....');

    var page = require('webpage').create();

    page.onConsoleMessage = function(msg) {
        console.log(msg);
    };

    page.open('http://news.baidu.com', function (status) {
		    if (status !== 'success') {
		        console.log('Unable to access network');
		    } else {
		        console.log("BaiDU is ok");
			page.injectJs("encoding.js");
		        page.injectJs("test.js");
			}//End of if
		});//End of open anymous function    
};

exports.start = function (callback) {
    console.log('Getting the tasks....');

    var page = require('webpage').create();

    page.open('http://localhost:8000/tasks/', 

    function (status) {
		    if (status !== 'success') {
		        console.log('Unable to access network');
		    } else {
		        console.log("I am OK.....");
		        //console.log(page.content)
		        var content=page.content;
		        //remove any tags
		        var result = content.replace(/<(?:.|\s)*?>/g, "");
		        console.log(result);
		        var jsParsered=JSON.parse(result);
		        //console.log(jsParsered.tasks);
		        exports.tasks=jsParsered.tasks;
		        getNews();
		        
		        callback(jsParsered.tasks);
		        
		    }//End of if
	    //console.log(page.content);
	    
	    //phantom.exit();
	});

}
