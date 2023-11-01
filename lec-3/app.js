//console.log(process.argv)
// let arr=process.argv;
// let ans=arr.slice(2);
// console.log(ans)
// for(let item of ans){
//     console.log("hello how are you?  "+item);
// }

// print 1 to any number
// let arr=process.argv.pop();
// console.log(arr);
// let str="fizz";
// for(let i=1;i<arr;i++){
//     if(i%3==0){
//         console.log(str);
//     }
//     if(i%3==0 &&  i%5==0){
//         console.log(str);
//     }
//     else if(i%5==0){
//         console.log(str);
//     }
//     else if(i%7==0){
//         console.log(str);
//     }
//     else{
//         console.log(i);

//     }

// }

//optimized code for above
let arr = process.argv.pop();
//console.log(arr);
let count3 = 1;
let count5 = 1;
function fizzBuzz(arr) {
  let i = 1;
  let str = "";
  while (i <= arr) {
    if (count3 == 3) {
      str += "fizz";
      count3 = 0;
    }
    if (count5 == 5) {
      str += "buzz";
      count5 = 0;
    }
    if (str == "") {
      str += i;
    }
    console.log(str);
    count3++;
    count5++;
    i++;
    str = "";
  }
}
fizzBuzz(arr);
