const express=require('express');
const app=express();
const path=require('path');

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))
let arr=['Tejveer','Rajput']
app.use(express.static(path.join(__dirname,'public')));

app.get('/home',(req,res)=>{
    // res.send("<h1>this is home page</h1>")
    let randomNum=Math.floor(Math.random()*10);
    res.render('home',{randomNum})
})
app.get('/',(req,res)=>{
    // res.send("<h1>this is home page</h1>")
    res.render('index',{arr})
})

app.listen(8080,()=>{
    console.log("server is connected at port 8080")
})
