var Server = require('ws').Server;
var socketServer = new Server({port: 5001});

socketServer.on("connection", (ws)=>{

    console.log("1 connection is established ...")

    setInterval(()=>{
        ws.send("hello...");
    },1000)
    
    ws.on("message",(message)=>{
        console.log("Recieved message is "+message);
    })
})