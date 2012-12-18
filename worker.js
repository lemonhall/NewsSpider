var Tasks = require('./tasks');
Tasks.start(function(tasks){
	tasks.forEach(function(s){
			console.log(s.keyword);
	});
	console.log(tasks);
});
	
