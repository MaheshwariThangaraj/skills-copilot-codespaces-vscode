// create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// create web server
http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;

    if (pathname == '/') {
        fs.readFile('comment.html', function(error, data){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    } else if (pathname == '/comment') {
        var body = '';

        // request data
        request.on('data', function(data){
            body += data;
        });

        // request end
        request.on('end', function(){
            var post = qs.parse(body);

            console.log(post);

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end('comment: ' + post.comment);
        });
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('page not found');
    }
}).listen(3000, function(){
    console.log('server running at http://
