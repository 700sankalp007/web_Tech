import express from 'express';
import path from 'path';
import app from './app/app.js';

const port=3000;
const message=`http://localhost:${port}`;

const server=express();
server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use('/app',app);
const absolutePath=path.resolve(path.dirname(''));


server.get('/',(req,res)=>{
    res.setHeader('content-type','text/html');
    res.sendFile(absolutePath+'/index.html');
})


server.listen(port,()=>{
    console.log(message);
})

