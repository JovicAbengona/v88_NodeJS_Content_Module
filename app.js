// get the http module:copy
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');

var static_mod = require('./static.js');
// creating a server using http module:
var server = http.createServer(function(request, response){
    // see what URL the clients are requesting:
    // console.log('client request URL: ', request.url);
    console.log(static_mod.getFile(request.url));
    let getFile = static_mod.getFile(request.url);
    // this is how we do routing:
    if(getFile.file_type === "html"){
        fs.readFile(`views/${getFile.file_name}`, 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': getFile.content_type});  // send data about response
            response.write(contents);  // send response body
            response.end(); // finished!
        });
    }
    else if(getFile.file_type === "css"){
        fs.readFile(`stylesheets/${getFile.file_name}`, 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': getFile.content_type});  // send data about response
            response.write(contents);  // send response body
            response.end(); // finished!
        });
    }
    else if(getFile.file_type === "jpeg"){
        fs.readFile(`images/${getFile.file_name}`, function(errors, contents){
            response.writeHead(200, {'Content-type': getFile.content_type});
            response.write(contents);
            response.end();
        });
    }
    else if(getFile.file_type === "png"){
        fs.readFile(`images/${getFile.file_name}`, function(errors, contents){
            response.writeHead(200, {'Content-type': getFile.content_type});
            response.write(contents);
            response.end();
        });
    }
    else{
        fs.readFile('views/404.html', 'utf8', function (errors, contents){
            response.writeHead(404, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");