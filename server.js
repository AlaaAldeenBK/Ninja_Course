const server =  require("http")
const curServer = server.createServer((req,res) =>{
    // console.log("Hello");
    res.write("Hello")
});
curServer.listen("3000","localhost", ()=>{
    console.log("Listening for request");
});