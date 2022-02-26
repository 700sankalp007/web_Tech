import person from '../jsClasses/person.js'
import express from 'express';

const appPerson=express.Router();

const personList=[];
personList.push(new person('pf101','pl101','1000'));
personList.push(new person('pf102','pl102','1000'));
personList.push(new person('pf103','pl103','1000'));



//get all persons list

appPerson.get('/list',(req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.send(personList)
});

//add a new person

appPerson.post('/add',(req,res)=>{
    const newPerson=new person(req.body.firstName,req.body.lastName,req.body.pnoneNumber);
    personList.push(newPerson);

    res.send({message:'add record'});
});

//delete a record 

appPerson.delete('/delete/:fname',(req,res)=>{
    const fname= req.params.fname;
    for(let i in personList){
        if(fname===personList[i].firstName){
            personList.splice(i,1);
            break;
        }
    }
    res.send({message:'deleted'});

    
});

//update record

appPerson.put('/update/:fname',(req,res)=>{
    const id= req.params.fname;
    for(let i in personList){
        if(id===personList[i].firstName){
            personList[i]['lastName']=req.body.lastName;
            personList[i]['pnoneNumber']=req.body.pnoneNumber;
            break;
        }
    }
    res.send({message:'update'});
});


export default appPerson;