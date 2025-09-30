const express=require('express');
const http=require("http");
const {server}=require('socket.io');
const {PORT}=require('./config/serverconfig')

const startserver=()=>{
    const app=express();

    app.listen(PORT,()=>{
        console.log(`server is starting at port no:${PORT}`);
    })
}

startserver();