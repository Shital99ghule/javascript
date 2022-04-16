let x=10
x=20
console.log(x)

var y=30
y=40
console.log(y)

const z=50
// z=60
console.log(z)
console.log('------------variable declaration type end---------------')
//airthmatic operation
let a=10
let b=5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

console.log('----------------airthmatic operation end--------------')

//--->this is the coment for single line
/*---->this is the multiline comment*/

//function declaration types
//1.function without parameter and without returntype
//2.function with prameter and without return type
//3.function with parameter and with return type
//4.function without parameter and with return type

//function is used to reduce the repeatation of code

//1.function without parameter and without return type

function addition(){
    console.log(10+20)
}
addition()

//2.function with parameter and without return type
function substraction(s1,s2){
    console.log(s1-s2)
}
substraction(20,30)

//3.function with parameter and with returntype
function multi(m1,m2){
    return m1*m2
}
let result=multi(5,6)
console.log(result)

//4.function without parameter and with returntype

function divsion(){
    return 30/5
}
let result1=divsion()
console.log(result1)

console.log('-----------------------function passing parameter type end-------------')


//function types 
// 1.function declaration
// 2.function  expression
// 3.arrow function 


//1.function declaration
function add(a1,a2){
    return a1+a2
}
let resultAdd=add(20,30)
console.log(resultAdd)

//2. function expression
let resultExpression=function multiplication(e1,e2){
return e1*e2
    
}
let op=resultExpression(5,8)
console.log(op)


//3.arrow function

let arrowFunction=(af1,af2)=>{
    return af1/af2
}
let afResult=arrowFunction(10,5)
console.log(afResult)

console.log('----------------------function types end-----------------')


//typeOf  operator
let num=10
console.log(typeof num)//number

let str='shital'
console.log(typeof str)//string

let arr=[1,2,3]
console.log(typeof arr)//object

let nulType=null
console.log(typeof null)//object


let undefindType=undefined
console.log(typeof undefindType)//undefined
