// "use strict"
// a=5;
// console.log(a);

// var message="Keerthana";
// console.log(message.length);
// console.log(typeof(message));

// var data =" This is a txt message";
// console.log(data.length);
//  console.log(data.indexOf('txt')) ;
//  it provide the position no of the word txt
//  console.log(data.replace('txt','text')) ;
//  console.log(data);
//  console.log(data.split(' '));
//  console.log(data.split(','));
//   console.log(data);
// console.log(data.trim());
// console.log(data.trimStart());
// it removes the whitespaces
// let fruits=["Apple","Mango","orange","Grapes"];
// console.log(Array.isArray(fruits));
// // foreach used for creating array
// fruits.forEach(function(item){
//     console.log(item)
// });

// let num=[20,30,58,65];
// num.forEach(function(item,ind){
//     num[ind]=item<50;
// })
// // ind is the index No.
// console.log(num)

var obj1=JSON.parse('{"name":"Keerthana","age":10}');
console.log(obj1);
var obj2=JSON.stringify(obj1);
console.log(obj2);
a=2;b=3;
console.log(a+b);

function sum(a,b){
    var s=a+b;
    console.log(`The sum is ${s}`);
}
sum(10,20);

// arrow function
var add =(c,d)=>{
    console.log(`The sum is ${c+d}`);   
}
sum(10,1)

var sub =(e,f)=>{
    console.log(`The difference is ${e-f}`);   
}
sub(10,5)
// spread operator is used to combine two variables example is c
var a=[5,6,7];
var b=[45,89];
var c=[...a,...b];
console.log(c);
var d=[2,3,...b];
console.log(d);
// Array destructuring

var[q,r,s]=[2,3,4];
console.log(r);
var[p,,w]=[2,5,8];
console.log(w);
var[h,,j,...l]=[1,2,3,4,5,6,7];
console.log(l);