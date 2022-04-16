// why functions??

let a = 100
let b = 20

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

let x = 100
let y = 30

console.log(x + y)
console.log(x * y)
console.log(x / y)
console.log(x % y)


// functions ---- javascript 


// function declaration 
// program One
console.log('********')
function calculator(x, y) {
    console.log(x + y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)

}
calculator(120,60)
calculator(1200,600)
calculator(400,20)

// function expression  or first class function
// Program 2
let calculator2 = function(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)

}
calculator2(100,30)
calculator2(10,5)

// Arrow function

let calculator3 = (x,y)=> {
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
}
calculator3(12,6)


// program 4

// function declaration 
function add(x,y){
    console.log(x+y)
}
add(12,13)

// function expression 

let add2 = function(x,y){
    console.log(x+y)
}
add2(12,12)
// arrow function 
let add3 = (x,y)=>{
    console.log(x+y)
}
add3(100,23)

// -------------------------------------------------
// function without parameter and without return type

function mul(){
    console.log(8*8)
    console.log(4*4)
}
mul()
mul()
// function with parameter and without return type
function mul2(a,b,c,d){
    console.log(a*b) // 400
    console.log(c*d) // 7200
}
mul2(10,40,80,90)
mul2(100,400,800,900)

// function with parameter and with return type

function mul3(x,y){
    return x * y
}
let qwerty = mul3(100,20)
console.log(qwerty)
console.log(qwerty + qwerty)

// function without parameter and with return type
function pliValue(){
    return 3.14
}
let qwerty2 = pliValue()
console.log(qwerty2)

//----------------------------------------------------



let sub = function(){
    console.log(100-20)
}
sub()
sub()

let sub2 = function(x,y){
    console.log(x-y)
}
sub2(100,12)
sub2(100,34)

let sub3 = function(x,y){
    console.log(x-y)
    return x - y
}
let qwertyc = sub3(100,12)
console.log(qwertyc)
console.log(qwertyc -8)
console.log(qwertyc * 0.10)


let sub4 = function(){
    return 4
}
let qwertyd = sub4()
console.log(qwertyd)

//--------------------------------
let sub5 = ()=>{
    console.log(100-20)
}
sub5()
sub5()

let sub6 = (x,y)=>{
    console.log(x-y)
}
sub6(100,12)
sub6(100,34)

let sub7 = (x,y)=>{
    console.log(x-y)
    return x - y
}
let qwertyg = sub7(100,12)
console.log(qwertyg)
console.log(qwertyg -8)
console.log(qwertyg * 0.10)


let sub8 = ()=>{
    return 4
}
let qwertyl = sub8()
console.log(qwertyl)

// Arrow

let multiplication = (x,y)=>{
    return x * y
}
let aa = multiplication(12,14)
console.log(aa)


let multiplication2 = (x,y)=>console.log(x*y)
multiplication2(12,14)

//  summary 


function add(x,y){
    console.log(x+y)
}
add(12,44)