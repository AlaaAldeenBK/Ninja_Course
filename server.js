const server =  require("http")
const curServer = server.createServer((req,res) =>{
    // console.log("Hello");
    // res.write("Hello")
    // console.log(req.method);
    res.setHeader("Content-Type","text/html")
    res.write("<head><link rel=stylesheet href='#'></head>");
    res.write("<p>Hello everyone</p>");
    res.write("<p>Hello everyone</p>");
    res.end();
});
curServer.listen("3000","localhost", ()=>{
    console.log("Listening for request on port 3000");
});