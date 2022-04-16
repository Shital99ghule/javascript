let  licenseAvailable  = false
const testPass = true 

if (testPass) licenseAvailable = true
if (licenseAvailable) console.log('I can drive now')

let a = 10 
let b = 20 

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let y = 100
let r = 50 

console.log(y+r)
console.log(y-r)
console.log(y*r)
console.log(y/r)
console.log(y%r)

// function 


function cal(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x/y)
    console.log(x*y)
    console.log(x%y)
}
cal(100,50)

// function declaration 


function addition(){
    console.log( 9 + 9 )
}
addition()

function printName(){
    console.log('My full name is Chinmay Deshpande')
}

printName()
printName()
printName()


function fruitProcessor(fruitOne,fruitTwo){
    console.log(`The juice is combination of ${fruitOne} and ${fruitTwo}`)
}
fruitProcessor("apple","mango")

// String 

let firstName = "chinmay"
let lastName = "deshpande"

// My firstName is chinmay and lastName is deshpande
console.log('My first name is '+firstName+' and lastName is '+lastName)
console.log("My firstname is "+firstName+"  and lastName is "+lastName)
console.log('My fav quote is "try try but do not cry" ')
console.log("chinmay's fav habit is atomic habits")
console.log('chinmay\'s fav book is atomic habits')
// String interpolation
console.log(`My firstname is ${firstName} and lastName is ${lastName}`)



// Fucntion declartion and function expression

function calAge(birthYear){
    return 2022 - birthYear
}

let age = calAge(1990)
console.log(age) // 31

// function 

let calAge2 = function(birthYear){
    return 2022 - birthYear
}
let age2 = calAge2(1990)
console.log(age2)

// Arrow functions

// let calAge3 = (birthYear)=>{
//     return 2022 - birthYear
// }
// let age3 = calAge3(1990)
// console.log(age3)

// let calAge3 = (birthYear)=>2022 - birthYear
// let age3 = calAge3(1990)
// console.log(age3)


let calAge3 = birthYear => 2022 - birthYear
let age3 = calAge3(1990)
console.log(age3)

// function with if else statement 
function retirementAge(age){

    if(age < 60 ){
        console.log(`Remaining years for retirement ${60-age}`)
    }
    else {
        console.log(`Already retired`)

    }
}
let age4 = calAge3(1960)
retirementAge(age4)
console.log(`The additon of one plus two is ${1+2}`)  // '3' // 3


// Marks 

let calAvg = (a,b,c)=> (a + b + c)/3

let avgAmol = calAvg(5,6,7)
let avgSarika = calAvg(7,8,9)
let avgPoorva = calAvg(5,6,7)

function getTopper(studentOne,studentTwo,studentThree){
    if(studentOne > studentTwo  && studentOne >studentThree){
        console.log(`Student one is Topper`)
    }
    else if(studentTwo > studentThree){
        console.log(`StudentTwo is Topper`)
    }
    else {
        console.log(`Student Three is Topper`)
    }
}
getTopper(avgAmol,avgSarika,avgPoorva)