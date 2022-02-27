import express from 'express';
import path from 'path';

const app=express.Router();

const mypath=path.resolve(path.dirname(''));

app.get('/welcome.html',(req,res)=>{
    res.setHeader('content-type','text/html');
    res.sendFile(mypath+'/welcome.html');
});





export default app;