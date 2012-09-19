var http = require('http');
var url = require('url');

function start(route, handle) {

    function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
        console.log("Request for "+ pathname +" received.");
//	
//        request.setEncoding("utf8");
//
//	request.addListener("data", function(postDataChunk){
//	    postData += postDataChunk;
//	    console.log("Received POST data chunk '"+
//            postDataChunk + "'.");
//			
//	});
//
//	request.addListener("end", function(){
	    route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(1337);
    console.log("Server started at localhost:1337");
}

exports.start = start;
