// const figlet=require("figlet");
// figlet("welcome",function (err,data){
//     if(err){
//         console.log("something went wrong");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });


// colors
const figlet=require("figlet");
const colors = require('colors');
figlet("hello Tejveer Rajput",function (err,data){
    if(err){
        console.log("something went wrong");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});
