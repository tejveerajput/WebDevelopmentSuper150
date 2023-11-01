const express=require('express');
const app=express();
const path=require('path');


let todos=["go to shimla"," meetup","enjoy","then come back  home"]

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.use(express.static(path.join(__dirname,'public')));

app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

// app.get('/',(req,res)=>{
//     res.send("<h1>Hello bro, how are you? </h1>")
// })
app.get('/todos',(req,res)=>{
    res.json(todos);
})


app.post('/todos',(req,res)=>{
    // console.log(req.body);
    let{todo}=req.body;
    todos.push(todo);
    res.json({msg:"post req chal gyi meri"});
})

app.listen(8080,()=>{
    console.log("server connected at 8080 port");
})