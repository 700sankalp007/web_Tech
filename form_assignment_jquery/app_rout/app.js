import express from 'express';
import path from 'path';

let emp={};

let dummy={
    'fname':'sankalp',
    'lname':'nayak',
    'age':'22',
    'number':'1111111111' ,
    'email':'sankalp.nayak.exam@gmail.com',
    'salary':'123',
    'dept':'20'      
};

const app=express.Router();

const mypath=path.resolve(path.dirname(''));

app.post('/welcome.html',(req,res)=>{
    
        emp['fname']=req.body.fname;
        emp['lname']=req.body.lname ;
        emp['age']=req.body.age ;
        emp['number']=req.body.number ;
        emp['email']=req.body.email ;
        emp['salary']=req.body.salary ;
        emp['dept']=req.body.dept ;
        emp['date']=req.body.date;
    
    res.setHeader('content-type','text/html');
    res.sendFile(mypath+'/welcome.html');



});


app.get('/data',(req,res)=>{
res.setHeader('content-type','application/json');
res.send(emp);
});







export default app;