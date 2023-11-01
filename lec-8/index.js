const express= require('express');
const app= express();
const path= require('path');
const methodOverride= require('method-override');

let comments=[{
    id: 0,
    username:"manoj tiwari",
    comment:"rinkiya kai papa"

},
{
    id: 1,
    username:"Puneet superstart",
    comment:".....Ab  dekh  Ab to gya beta  darshal mai boht din sai issi khurak mai tha ab dekh seedhe commissioner call karta hu......."

},{
    id: 2,
    username:"Arjit singh",
    comment:"Tum hi ho"

}
,{
    id: 3,
    username:"Kokila ben",
    comment:"Rasode mai kon tha"

}]

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/',(req,res)=>{
    res.send('<h1>root route</h1>')
})
//restful rouitng
//read ->displaying all the comments

app.get('/comments',(req,res)=>{
    res.render('index',{comments})
})

app.get('/comments/new', (req, res)=>{
    res.render('new')
})

app.post('/comments', (req, res)=>{
    console.log(req.body)
    let {username, comment}= req.body ;
    comments.push({username, comment, id: comments.length}) ;
    res.redirect('/comments')
})

app.get('/comments/:commentId', (req, res)=>{
    console.log(req.params) ;
    let {commentId} = req.params ;
    let found= comments.find((item) =>{return item.id == commentId})
    // res.send('hello')
    res.render('show', {found})
})

app.get('/comments/:commentId/edit', (req, res)=>{
    let {commentId} = req.params ;
    let found = comments.find((item) => {return item.id == commentId}) ;

    res.render('edit', {found}) ;
})

app.patch('/comments/:commentId', (req, res)=>{
    let {commentId} = req.params ;
    let found= comments.find((item) =>{return item.id == commentId})
    // console.log(req.body) ;
    let {comment}= req.body ;
    found.comment = comment
    res.redirect('/comments')
    // res.send('edited Successfully')
})

app.delete('/comments/:commentId', (req, res)=>{
    let {commentId} = req.params ;
    let newArray= comments.filter((item)=>{return item.id != commentId}) ;
    comments = newArray ;
    res.redirect('/comments')
})

app.listen(8080,()=>{
    console.log("server connected at port 8080")
})