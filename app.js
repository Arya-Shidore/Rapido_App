import express from 'express';

const app=express();

app.listen(5000,()=>{
    for (let i = 0; i < 10000000; i++) {
        console.log("Hello World");
    }
    console.log("Server is running on port 5000");
})