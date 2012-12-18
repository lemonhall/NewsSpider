exports.tasks = "sldkfjalskjd";
exports.start = function (callback) {
    console.log('Getting the tasks....');

    var page = require('webpage').create();

    page.open('http://localhost:8000/tasks/', 

    function (status) {
		    if (status !== 'success') {
		        console.log('Unable to access network');
		    } else {
		        console.log("I am OK.....");
		        //console.log(page.content);
		        exports.tasks=page.content;
		        callback();
		    }
	    //console.log(page.content);
	    
	    phantom.exit();
	});

}