var tasks = require('./tasks');

	
tasks.start(function(){
	
	console.log(tasks.tasks)
	var ss=tasks.tasks;
	console.log(ss);

	for(s in ss){
		console.log(s);
	}
});
	
