import express from 'express';
import car from '../jsClasses/car.js';

const appCar=express.Router();

let carList=[];
carList.push(new car('c101','cname1','cprice1'));
carList.push(new car('c102','cname2','cprice2'));
carList.push(new car('c103','cname3','cprice3'));



//get all car list
appCar.get('/list',(req,res)=>{
    res.setHeader('content-type','applicatoin/json');
    res.send(carList);
});

//get one car by carNO
appCar.get('/:carNo',(req,res)=>{
    res.setHeader('content-type','application/json');

    
    res.send();
});

//add a new car

appCar.post('/add',(req,res)=>{
    const newCar=new car(req.body.carNo,req.body.newCar,req.body.carPrice);
    carList.push(newCar);

    res.send({message:'add record'});
});

//delete a record 

appCar.delete('/delete/:id',(req,res)=>{
    const id= req.params.id;
    for(let i in carList){
        if(id===carList[i]['carNo']){
            carList.splice(i,1);
            break;
        }
    }
    res.send({message:'deleted'});

    
});

//update record

appCar.put('/update/:id',(req,res)=>{
    const id= req.params.id;
    for(let i in carList){
        if(id===carList[i].carNo){
            carList[i]['carName']=req.body.carName;
            carList[i]['carPrice']=req.body.carPrice;
            break;
        }
    }
    res.send({message:'update'});


});

export default appCar;