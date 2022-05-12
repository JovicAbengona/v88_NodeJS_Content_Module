// get the http module:copy
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');

var static_mod = require('./static.js');
// creating a server using http module:
var server = http.createServer(function(request, response){
    // see what URL the clients are requesting:
    // console.log('client request URL: ', request.url);
    let getFile = static_mod.getFile(request.url);
    console.log(getFile);
    // this is how we do routing:
    fs.readFile(getFile.file_path, getFile.encoding, function(errors, contents){
        response.writeHead(getFile.status_code, {'Content-type': getFile.content_type});
        response.write(contents);
        response.end();
    });
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");