// let city = "chinmay deshpande"
// let city2 = "Pune2"


// // 0  1  2  3
// // P  u  n  e

// console.log(city[0])


// for(let i = 0 ; i < city.length ;i++){
//     //console.log(i)
//     console.log(city[i])
// }



// Object 
// property  and method
// Every thing in js object 

// String ==== > object 



let fruit = "Apple"
// property 
console.log(fruit.length)
// Method --- (string / regrex)

// Method
// action 
// return 
let aaa = fruit.toUpperCase()
console.log(aaa)


let bbb = fruit.toLowerCase()
console.log(bbb)


let ccc = fruit.startsWith("A")
console.log(ccc)

let ddd = fruit.endsWith('E')
console.log(ddd)

let vegetable = "Potato"
let count = 0

// 0  1  2  3  4  5
// P  o  t  a  t  o

for(let i = 0 ; i < vegetable.length ;i++){
    //console.log(vegetable[i])
    if(vegetable[i] == 't'){
        count = count + 1
    }
}
console.log(count)

// comparison operator

// < ,>, <=, >= ,!=, == ,!== ===

console.log(3 < 2)
console.log(3 > 2)
console.log(2 >= 2)
console.log(2 <= 3)
console.log(2 >= 4)

console.log('5')
console.log(typeof '5')
console.log(typeof 5)



// '5' or  5

console.log('5' == 5) // true only check oneThing
console.log('5' === 5) // 


console.log( 9 == 9)
console.log(9 =='8')
console.log(9 === 9)
console.log(9 === '9')

console.log( 3 != 3)
console.log( 3 != '3')
console.log(3 !== '3')

console.log( 4 !== 4)
console.log(4 == '4')
console.log(4 !== '4')
console.log(4 != '4')


//------------------------->

//logical operator


//AND

// True  True   ---  True 
// True  False   --- False 
// False True   ---  False 
// False False   --- False 
// or
// True  True   ---  True 
// True  False   --- True 
// False True   ---  True 
// False False   --- False 

// Not 

//True -- False
//False - True

console.log( 4 > 3 && 6 == '6')
console.log( 4 >= 3 && 6 !== '6')
console.log(3 >= 3 || true) 
console.log(6 !== 6 && 6 == '6')
console.log(4 !== '4' || false)

////   True  &&  True

// arthimetic operators  + - * / %
// logical operators - AND OR NOT
// comparsion  - < ,> <= , >= , != , == ,=== , !==


// conditional statement 

// if(condition){


// }
// else{


// }



// 7 am  ------  7 pm --------- 9 pm
// morning     afternoon      evening 


// condition , same input multiple output depending upon
// number of tickets -----> 5 ---- 10%
// number of tickets ------> 5> ---- 20 %


let numberOfticket = 5

if(numberOfticket <= 5){
    console.log('10 % discount')
}
if(numberOfticket > 5){
    console.log('20 % discount')
}

// 1 -- 5 ==> 5%
// 5 > <= 10 ===> 10%
// 10 > 20%


if(numberOfticket <= 5){
    console.log('10 % discount')
}
else if(numberOfticket > 5){
    console.log('20 % discount')
}

//------------------------------->


if(5 > 5){
    console.log("Hello")
}
else {
    console.log('Bye')
}


if(5 == 5){
    console.log("Hello")
}
else {
    console.log('Bye')
}


if(5 == '5'){
    console.log("Hello")
}
else {
    console.log('Bye')
}

if(5 === '5'){
    console.log("Hello")
}
else {
    console.log('Bye')
}

if(5 !== '5'){
    console.log("Hello")
}
else {
    console.log('Bye')
}

if(5 !== '5' && true){
    console.log("Hello")
}
else {
    console.log('Bye')
}

if(5 !== '5' && 7 > 4){
    console.log("Hello")
}
else {
    console.log('Bye')
}

// AND
//   True True -- True
//   True False -- False
//   False True -- False
//   False False -- False

// OR
//   True True -- True
//   True False -- True
//   False True -- True
//   False False -- False

if(5 !== '5' && 7 <= 4){
    console.log("Hello")
}
else {
    console.log('Bye')
}

if(!true){
    console.log("Hello")
}
else {
    console.log('Bye')
}

// truthy  1 , -1 ,A ,special symbols,true , 7 == 7 , Infinity
// falsely -  0 , null , undefined , false , 3>5

console.log('-------')
if(3>5){
    console.log("Hello")
}
else {
    console.log('Bye')
}
//-------------------------------
if(Infinity){

    console.log('Hello')

}
else {
    console.log('Bye')
}
//------------------------------------->


// Everything in js object 

// Object property and method

// method --- action and return type

fruit = "Mango"
// return 
let aaaa = fruit.toUpperCase()
console.log(aaaa)


let bbbb = fruit.toLowerCase()
console.log(bbbb)


let cccc = fruit.startsWith("A")
console.log(cccc)

let dddd = fruit.endsWith('E')
console.log(dddd)

// 0 1 2  3  4 5
// T o m  a  t o

let vegetable2 = "tomato"
let r = vegetable2.indexOf('t',2)
console.log(r)


let f = vegetable2.includes("ma")
console.log(f)
let fa = vegetable2.includes("may")
console.log(fa)


let d = vegetable2.charAt(1)
console.log(d)

let fullName = "chinmaydeshpande@gmail.com" // ["chinmay","deshpande"]

// ["chi","may deshpa","de"]
let rrr = fullName.split('@')
console.log(rrr)