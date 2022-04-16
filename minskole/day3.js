// /*
//     comparision 

//     logical 

//     conditional 

//     switch 

//     truthy and falsy value

// */

// //  + - / * % 2**3
// // i = i + 1 ,i = i -1 , i-= 1 , i++ , i--

// // comparision operator
// //< , > , <= , >= , != , == , === , !==

// // program 1

// let a = 100
// let b = 50
// console.log(a>b)  // booelan

// // comparison 

// console.log(8 < 8)  // false
// console.log(8 <= 8 ) // true
// console.log(7 >6) // true 
// console.log(6 <= 7) // true 
// console.log(6 == 6) // true 
// console.log(6 == '6') // true
// console.log(6 === '6') // false

// // == (value) , === (value and type)
// // '6' --- value , string 
// //  6 ---  value , number  
// console.log(6 == 6) // true
// console.log(6 === 5) // false
// console.log('5' === '5') // true
// console.log(5 != 4) //  true
// console.log(5 != '5') //  false
// console.log(6 !== '6') // true
// console.log('5' == '5') // true
// console.log('5' === '5') // true

// // program 1

// //logical operator 
// // AND - &&
// // True True --->  True
// // True False ---> False
// // False True ---> False
// // False False --->False

// console.log('----- AND ----- ')
// console.log(7 > 5 && 7 == 7)
// console.log( 7 === '7' && '7' == '7')


// // OR - ||
// // True True --->  True
// // True False ---> True
// // False True ---> True
// // False False --->False

// console.log(6 == '6' || 6 !== '6') 
// console.log(6 !== 6  || true)
// console.log(7 > 8 || 8 === '8')
// //         false || false

// // NOT - !
// console.log(!true)
// console.log(!false)

// // condition statement 

// // numberofTickets --->   10 % , 20 % , 30 %
// // conditional statements
// // if , if else , if esle if  else

// // syntax

// // if(condition){
 
// // }


// let numberofTickets = 6
// if(numberofTickets <= 5){
//     console.log('5 percent discount')
// }
// if(numberofTickets > 5 &&  numberofTickets <= 10){
//     // True &&  True
//     console.log('10 percent discount')
// }



// let numberofTicketsB = 3
// if(numberofTicketsB <= 5){
//     console.log('5 percent discount')
// }
// if(numberofTicketsB > 5 &&  numberofTicketsB <= 10){
//     // True &&  True
//     console.log('10 percent discount')
// }


// let numberofTicketsB = 3
// if(numberofTicketsB <= 5){
//     console.log('5 percent discount')
// }
// else if(numberofTicketsB > 5 &&  numberofTicketsB <= 10){
//     // True &&  True
//     console.log('10 percent discount')
// }
// else {
//     console.log('Incorrect input')
// }


// logical 

// comparison

// conditional statement 

// comparison 
// < , > , < = , >=, !== , == , !== , ===
console.log(7 === '7') // false
console.log(7 == '7')

// assignment operator 

// logical operator 
// AND 

// True True  === >> True
// True False  === >> False
// False True  === >> False
// False False  === >> False



// OR

// True True  === >> True
// True False  === >> True
// False True  === >> True
// False False  === >> False

// NOT
// True -- False
// False - True

let x = 10 

// condition statement 
// if(condition){

// }
// else{

//     console.log()
// }


// true values 



// Truthy   1 , 'A' , "Chinmay"," ", true,[],{}
// Falsy  - 0 ,"",undefined ,false,null

let numA = 0

if(0){
    console.log("hello")
}
else{
    console.log('Bye')
}

if(-1){
    console.log("hello")
}
else{
    console.log('Bye')
}

if('A'){
    console.log("hello")
}
else{
    console.log('Bye')
}
if('Chinmay'){
    console.log("hello")
}
else{
    console.log('Bye')
}

if(''){
    console.log("hello")
}
else{
    console.log('Bye')
}

if(' '){
    console.log("hello")
}
else{
    console.log('Bye')
}

if(undefined){
    console.log("hello")
}
else{
    console.log('Bye')
}

if(null){
    console.log("hello")
}
else{
    console.log('Bye')
}
if(false){
    console.log("hello")
}
else{
    console.log('Bye')
}

if(true){
    console.log("hello")
}
else{
    console.log('Bye')
}

if([]){
    console.log("hello")
}
else{
    console.log('Bye')
}
if({}){
    console.log("hello")
}
else{
    console.log('Bye')
}

//--------------------------------
// let a ;
// console.log(a)

let a = Boolean(null)
console.log(a)

let b = Boolean('')
console.log(b)

let c = Boolean('C')
console.log(c)

//------------------------------------

// 0 Try again 
// 1 study more
// 1 > pass

let numAB = 1

if(0 == numAB){
    console.log('Try again')
}
else if(numAB == 1){
    console.log('study')    
}
else{
    console.log('pass')
}

//-------------------------------

// Browser --- html 

let age = prompt('Enter you age') // 18 ,'18'
age = Number(age) // '18' ===> 18
if(age === 18){
    console.log('you can drive')
}
else{
    console.log('you cannot drive')
}