var resourceful = require('resourceful'),
    Tasks    = resourceful.define('tasks');



resourceful.use('memory');

Tasks.property('keyword', String, { default: "中国移动" });
Tasks.property('life', Number, { default: 10, minimum: 0, maximum: 20 });

var restful = require('restful');
//
// Setup a standalone restful server
//
var server = restful.createServer(Tasks);
server.listen(8000);
console.log(' > http server started on port 8000');
