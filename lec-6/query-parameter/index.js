const express=require('express');
const app=express();

app.get('/search',(req,res)=>{
    console.log(req.query);
    let{first,last}=req.query;
    res.send(`<h1>Hi my name is ${first} ${last}</h1>`);
    console.log(first+" "+last);
})

app.listen(8080,()=>{
    console.log("server connected at port 8080")
})