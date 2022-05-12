module.exports = {
    getFile: function(request){
        let response_data = {
            file_path    : "views/404.html",
            content_type : "text/html",
            encoding     : "utf8",
            status_code  : 404
        }

        if(request === "/"){
            response_data.file_path   = "views/index.html";
            response_data.status_code = 200;
        }
        else if(request === "/cars"){
            response_data.file_path   = "views/cars.html";
            response_data.status_code = 200;
        }
        else if(request === "/cats"){
            response_data.file_path   = "views/cats.html";
            response_data.status_code = 200;
        }
        else {
            let dir = request.split("/");
            
            if(dir.find(a => a.includes(".css"))){
                response_data.file_path    = `stylesheets/${dir.find(file => file.includes(".css"))}`;
                response_data.content_type = "text/css";
                response_data.status_code  = 200;
            }
            else if(dir.find(a => a.includes(".jpeg"))){
                response_data.file_path    = `images/${dir.find(file => file.includes(".jpeg"))}`;
                response_data.content_type = "image/jpg";
                response_data.encoding     = null;
                response_data.status_code  = 200;
            }
            else if(dir.find(a => a.includes(".png"))){
                response_data.file_path    = `images/${dir.find(file => file.includes(".png"))}`;
                response_data.content_type = "image/png";
                response_data.encoding     = null;
                response_data.status_code  = 200;
            }
        }

        return response_data;
    }
}