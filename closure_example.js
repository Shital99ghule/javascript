// function add(x,y){
//     console.log(x+y)
//     return "Welcome"
//     console.log("hello")
// }
// let result=add(10,20)
// console.log(result)

//return is the last statement of function

console.log('-------closure 1st example------')

function addition3(x,y){

     x = 12
     y = 13

    return function(){
        console.log(x+y)
        return x +y 
    }
  

}

 let r = addition3(12,13)
 r()//25
//  console.log(r)
// let jj = r()
//  console.log(jj)





console.log('-------closure 2nd example------')
//closure Example

function multi(x,y){
  
return function(){
    console.log(x*y)
}

}
let result1= multi(5,30)
result1()


 console.log('-----------------------closure 3rd example-----------------------')

function div(x){
    return function (y) {
        return x/y
    }
}

let output=div(40)
console.log(output(8))
console.log(div(20)(5))


console.log('----------------closure 4th example')

let outer=(a)=>{
    let b=10
    let iner_fun=()=>{
        let sum=a+b

console.log(`the sum of two no. is ${sum}.`)
}
return iner_fun
}
let inner_fun_op = outer(10)
// console.dir(inner_fun_op)
inner_fun_op()

console.log(`---------colusere 5th example`)

function age(a){
    a=20
     return function(){
      if ( a <30){
          console.log('hello')
      }
    

    }
   
}

let res=age()
// console.log(res)//op-->[Function (anonymous)]
 res()//op-->hello

