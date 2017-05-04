var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/generate"] = requestHandlers.generate;
handle["/auth"] = requestHandlers.auth;
handle["/checking"] = requestHandlers.checking;
handle["/logout"] = requestHandlers.logout;

server.start(router.route, handle);