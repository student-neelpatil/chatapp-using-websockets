const express=require('express');
const http=require("http");
const socketio=require('socket.io');
const {PORT}=require('./config/serverconfig')

 const app=express();

const httpserver=http.createServer(app);

const io=socketio(httpserver);


const startserver=()=>{
     io.on('connection',(socket)=>{
        console.log('user connected',socket.id);
     });

     app.get('/get',(req,res)=>{
        res.send("we are uisng websockets");
     })
     
    httpserver.listen(PORT,()=>{
      try {
           
         console.log(`server is starting at port no:${PORT}`);
         
      } catch (error) {
          console.log('server is failed to load');
      }
        
    });
}

startserver();