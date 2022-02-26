import express from 'express';
import path from 'path';
import car from './car_rout/carRout.js';
import person from './person_rout/personRout.js';

const ppath=path.resolve(path.dirname(''));
const port=3000;
const message=`http://localhost:${port}`;

const server=express();
server.use(express.urlencoded({extended:true}));
server.use(express.json());

server.use('/car',car);
server.use('/person',person);

server.get('/',(req,res)=>{
    res.setHeader('content-type','text/html');
    res.sendFile(ppath+'/index.html');
});




server.listen(port,()=>{
    console.log(message);
})