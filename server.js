const server =  require("http");
const fs = require("fs");
const curServer = server.createServer((req,res) =>{
    // console.log("Hello");
    // res.write("Hello")
    // console.log(req.method);
    res.setHeader("Content-Type","text/html")
    // res.write("<head><link rel=stylesheet href='#'></head>");
    // res.write("<p>Hello everyone</p>");
    // res.write("<p>Hello everyone</p>");
    let path = "./blog/views/";
    switch(req.url)
    {
        case "/":
            path+="index.html";
            break;
        case "/about":
            path+="about.html";
            break;
        default:
            path+="404.html";
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err)
        {
            console.log(err);
            res.end();
        }
        else
        {
            // res.write(data);
            res.end(data);
        }
    });

    // res.end();
});
curServer.listen("3000","localhost", ()=>{
    console.log("Listening for request on port 3000");
});