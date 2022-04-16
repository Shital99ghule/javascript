function multi(x,y){
    console.log(x)
    return function(){
        console.log(x*y)
    }
   
}
let result=multi(6,2)
// console.log(result)
result()

console.log('--------------------------------------')

function fun(a)  
{  
// var a = 4; // 'a' is the local variable, created by the fun()  
function innerfun() // the innerfun() is the inner function, or a closure  
{  
return a;  
}  
return innerfun;  
}  
var output = fun(4);  
console.log(output());  
console.log(" ");  
// console.log(output());  