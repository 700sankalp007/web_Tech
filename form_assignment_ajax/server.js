import express from 'express';
import path from 'path';
import app from './app_rout/app.js';

const port=3000;
const message=`http://localhost:${port}`

const fullPath=path.resolve(path.dirname(''));

const server=express();

server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use('/app',app);

server.get('/',(req,res)=>{
    res.setHeader('content-type','text/html');
    res.sendFile(fullPath+'/index.html');


});

server.get('/style.css',(req,res)=>{
    res.setHeader('content-type','text/css');
    res.sendFile(fullPath+'/css/style.css');
});

server.get('/ajax.js',(req,res)=>{
    res.setHeader('content-type','application/javascript');
    res.sendFile(fullPath+'/javaScript/ajax.js');
});

server.get('/myimg.jpg',(req,res)=>{
    res.setHeader('content-type','image/jpg');
    res.sendFile(fullPath+'/images/myimg.jpg');
});



server.listen(port,()=>{
    console.log(message);
});



