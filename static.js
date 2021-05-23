module.exports = {
    getFile: function(request){
        let f_type, f_name, c_type;
        if(request === "/"){
            f_type = "html";
            f_name = "index.html";
            c_type = "text/html";
        }
        else if(request === "/cars"){
            f_type = "html";
            f_name = "cars.html";
            c_type = "text/html";
        }
        else if(request === "/cats"){
            f_type = "html";
            f_name = "cats.html";
            c_type = "text/html";
        }
        let dir = request.split("/");
        if(dir.find(a => a.includes(".css"))){
            f_type = "css";
            f_name = dir.find(a => a.includes(".css"));
            c_type = "text/css";
        }
        else if(dir.find(a => a.includes(".jpeg"))){
            f_type = "jpeg";
            f_name = dir.find(a => a.includes(".jpeg"));
            c_type = "image/jpg";
        }
        else if(dir.find(a => a.includes(".png"))){
            f_type = "png";
            f_name = dir.find(a => a.includes(".png"));
            c_type = "image/png";
        }
        return{
            file_type: f_type,
            file_name: f_name,
            content_type: c_type
        }
    }
}