const express=require('express');
const app=express();
//wrong
// app.get('/r/cat' , (req,res)=>{
//     console.log("cat");
//     res.send("cat")
// })
// app.get('/r/dog' , (req,res)=>{
//     console.log("dog");
//     res.send("dog")
// })
app.get('/r/:subreddit',(req,res)=>{
    //console.log(req);
    //console.log(res.params);
    let {subreddit}=req.params;
    res.send(`<h1> hi i m ${subreddit} nice to meet you.How are you?</h1>`)
    
})

app.listen(8080,()=>{
    console.log("server connected at port 8080")
})