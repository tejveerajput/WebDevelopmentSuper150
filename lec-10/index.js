const express=require('express');//func
const app=express();
const mongoose =require('mongoose');//obj


//connect--> return me a promise
mongoose.connect('mongodb://127.0.0.1:27017/cheerz')//change db
.then(()=>{console.log("DB CONNECTED ")})//resolve
.catch((err)=>{console.log("CONNECTION ERROR ",err)})//reject


//create schemas 
let movieSchema = new mongoose.Schema({
   name :String,
   year :Number,
   imdb:Number,
   iswathed:Boolean
})


// let songSchema = new mongoose.Schema({
//     name :String,
//     year :Number,
//     imdb:Number,
//     iswathed:Boolean
//  })
//creating a model
//model name starts with capital letter and always singular.
let Movie=mongoose.model('Movie',movieSchema);
// let Song=mongoose.model('Song',songSchema);

let saktiman=new Movie({name:"saktiman",year:2004,imdb:8.9,iswatched:true});
// console.log(saktiman);
// saktiman.save()
// .then(()=>{console.log("movie saved successfully")})
// .catch((e)=>{console.log("error while saving movie"),e})


app.listen(8080,()=>{
    console.log('connected at port 8080');
})