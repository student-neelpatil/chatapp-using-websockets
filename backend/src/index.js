const express=require('express');

const startserver=()=>{
    const app=express();

    app.listen(3000,()=>{
        console.log("server is starting at port no.3000");
    })
}

startserver();