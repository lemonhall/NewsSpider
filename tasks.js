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
		        //console.log(page.content)
		        var content=page.content;
		        //remove any tags
		        var result = content.replace(/<(?:.|\s)*?>/g, "");
		        var jsParsered=JSON.parse(result);
		        //console.log(jsParsered.tasks);
		        exports.tasks=jsParsered.tasks;
		        
		        callback();
		    }
	    //console.log(page.content);
	    
	    phantom.exit();
	});

}