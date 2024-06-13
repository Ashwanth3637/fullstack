const http = require('http');
const url = require('url');
const cal=require("./calserver");

function getexample(request, response) {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const qs = parsedUrl.query;
    const num1 = parseInt(qs['num1']);
    const num2 = parseInt(qs['num2']);
    var result;
    var op;
    switch (path) {
        case '/add':
            o = 'addition';
            result = cal.add(num1,num2);
            break;
        case '/sub':
            o = 'subtraction';
            result = cal.sub(num1,num2);
            break;
        case '/product':
            o = 'multiplication';
            result = cal.product(num1,num2);
            break;
        case '/divide':
            o = 'division';
            result=cal.divide(num1,num2);
            break;
        case '/modulo':
            o = 'modulo';
            result = cal.modulo(num1,num2);
            break;
        default:
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.write('Page not found');
            response.end();
            return;
    }

    console.log('URL ' + request.url + ' received.');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("The result of "+o+" is "+result);
    response.end();
}
http.createServer(getexample).listen(4001);
console.log('Server Started');

