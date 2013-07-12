// var http = require('http');
// var url = require('url');

// function start(route, handle) {

//     function onRequest(request, response) {
//	var pathname = url.parse(request.url).pathname;
//         console.log("Request for "+ pathname +" received.");
//	route(handle, pathname, response, request);
//     }

//     http.createServer(onRequest).listen(1337);
//     console.log("Server started at localhost:1337");
// }

// exports.start = start;

var http = require("http");
function hello(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}
http.createServer(hello).listen(8888)

