console.log("Hello JS");
const a = 12;
if(a>10){
    //var a = 23;
    let b = 23;
    c = 12;
    console.log("a = " + a);
}
//let is used only within the scope of the body. It is not accessible outside the body
//console.log("b = " + b); // b is declared inside the body

function fun(a,b){
    console.log("This is a function");
    return a+b;
}
//let data = fun();
let data = fun(2,4);
console.log(data);