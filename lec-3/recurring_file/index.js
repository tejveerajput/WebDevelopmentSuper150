let PI = 3.1425;
let sqr = (n) => n * n;
let add = (a, b) => a + b;
console.log(PI)
console.log(sqr(5))
console.log(add(2,3))

// module.exports={
//        PI:PI,//if key and value are same then  value with the colon can be ignored.
//        sqr:sqr,
//        add:add
//     }
//without values
// module.exports={
//     PI,sqr,add
// }
module.exports={
    PII:PI,
    sqr:sqr,
    add:add
}
module.exports="sam";