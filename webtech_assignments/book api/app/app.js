
import express from 'express';
import book from '../jsfiles/book.js';


let listOFBooks=[ new book(101,'java',100),
                new book(102,'javaScript',200),
                new book(103,'c++',300)];

const app=express.Router()
//get all books
app.get('/allbooks',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.send(listOFBooks);
});

//
// get book by id 
app.get('/book/:id',(req,res)=>{
    res.setHeader('content-type','applicatoin/json');
    listOFBooks.forEach((element,index)=>{
        if(element.bookNo===parseInt(req.params.id))
        {
            res.send(element);
        }
    });
});


//delete book by id
app.delete('/delete/:id',(req,res)=>{
    res.setHeader('content-type','application/json');
    
        let conform=0;
        listOFBooks.forEach((element,index)=>{
            if(element.bookNo===parseInt(req.params.id)){
                listOFBooks.splice(index,1);
                conform=1;
            }

        });
        if(conform===0){
            res.send({message:'record not found'});
        }
        else{
            res.send({message:'record deleted successsfully'})
        }

    
});
//add a new book

app.post('/add',(req,res)=>{
    res.setHeader('comtent-type','application/json');
    const id=req.body.bookNo;
    const name=req.body.bookName;
    const price=req.body.unitPrice;
    listOFBooks.push({'bookNo':parseInt(id),'bookName':name,'unitPrice':parseInt(price)});

    res.send({message:'record added successfully'});
});

//update an existing record

app.put('/update/:id',(req,res)=>{
    const id=req.params.id;
    res.setHeader('cntent-type','application/json')
    
    listOFBooks.forEach((element)=>{
        if(parseInt(id)===element.bookNo)
            {
                
                element.bookName=req.body.bookName;
                element.unitPrice=req.body.unitPrice
            }
    });
    res.send({message:'update record successfully'});
});




export default app;



