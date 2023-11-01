// let fs=require('fs');
// let data="hi we are super 150";
// fs.writeFile('abc.txt',data,{
//     encoding:'utf-8',
//     flag:'w'
// },(err)=>{
//     if(err){throw err}
//     console.log("file written successfully");

// })

// let fs=require('fs');
// let data="hi we are coders";
// fs.writeFile('def.txt',data,{}
// ,(err)=>{
//     if(err){throw err}
//     console.log("file written successfully");

// })

//  let fs=require('fs');
//  let data="hi we are super 150";

// fs.readFile('abc.txt',{},(err,data)=>{
//     if(err){throw err}
//      console.log("file written successfully");
// })

// let fs = require("fs");
// fs.readFile(
//   "abc.txt",
//   {
//     // encoding:'utf-8',
//     //flag:'r'
//   },
//   (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//   }
// );

let fs=require('fs');

// fs.appendFile('abx.txt','file system ka bhaukaal',{},(err)=>{
//     if(err){throw err}
//      console.log("file edited successfully");
// })


fs.unlink('abc.txt',(err)=>{
    if(err){throw err}
     console.log("file deleted successfully");
})
