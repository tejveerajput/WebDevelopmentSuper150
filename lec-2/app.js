// console.log(a)
//  sam();
//  let a=10;
//  function sam(){
    // console.log("hello")
//  }

  
//  console.log(a)
//  sam();
//  let a=10;
//  function sam(){
//     console.log("hello")
//  }
//  let a=10;
//  console.log(a);
//  function b(){
//     console.log(a);
//  }
//  b();

// 
// let a=10;
// console.log(a);
// function b(){
//     let a=20;
//     console.log(a);
// }
// b();
// var a=10;
// console.log(a);
// function b(){
//     var a=20;
//     console.log(a);
// }
// b();
function a(){
    let c=100;
    console.log("inside a");
    function b(){
        console.log(c);
        console.log("inside b");
    }
    //b();
    return b;
}
let final=a();
// let final=function b(){
//     console.log(c);
//     console.log("inside b");
// }
//console.log(final);
final();