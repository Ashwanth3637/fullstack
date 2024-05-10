var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
    if (request.url == "/") {
        response.write("please enter exp1 or exp2 to redirect ");
        response.end("exp1-formvalidation exp2-cgpa claculator");
    } else if (request.url == "/exp1") {
        fs.readFile("form.html", function(err, data) {
            if (err) {
                console.error("failed to open form.html:", err);
                response.writeHead(404);
                response.end("File not found");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(data);
            }
        });
    } else if (request.url == "/exp2") {
        fs.readFile("cal3.html", function(err, data) {
            if (err) {
                console.error("failed to open cal3.html:", err);
                response.writeHead(404);
                response.end("File not found");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(data);
            }
        });
    } else {
        response.end("Invalid Exp");
    }
    console.log("Request Received");
});

server.listen(8003);

console.log("Server Started");