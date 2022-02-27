

function sendRequest(fname,lname,age, emale,pNumber,dept,sal){
    
    const para={
        'age': age,
        'dept': dept,
        'emale': emale,
        'fname': fname,
        'lname': lname,
        'pNumber': pNumber,
        'sal': sal,
    };
    
    xhr= new XMLHttpRequest();
   

    xhr.open('POST','/app/welcome.html',true);
    xhr.send();



}



function mySubmit(){
    const age=document.forms['myform']['age'].value;
    if(age<=0)
    {   
        alert(`Enter correct age`)
        return false;
    }

    const pNumber=document.forms['myform']['number'].value;
   if(pNumber.length<10 || pNumber.length>10)
    {
        alert('Enter Correct phone number')
        return false;
    }

    const sal=document.forms['myform']['salary'].value;
    if(sal<0)
    {
        alert('Enter correct salary')
        return false;
    }

    const fname=document.forms['myform']['fname'].value;
    const lname=document.forms['myform']['lname'].value;
    const emale=document.forms['myform']['email'].value;
    const dept=document.getElementById('dept').value;


    sendRequest(fname,lname,age, emale,pNumber,dept,sal);


}