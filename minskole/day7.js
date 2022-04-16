// program 1
// let randomNumber = Math.floor(Math.random()* 6) + 1 //  1 - 6// 0 to 5  // 0 to 5.99
// console.log(randomNumber)
// let userInput = Number(prompt('Please Guess the Number from 1 to 6'))
// if(userInput ==  randomNumber){
//     console.log('You Guess the number right !')
// }
// else {
//     console.log('Your Guess is incorrect ')
// }


// program 2

// let randomNumber = Math.floor(Math.random()* 6) + 1
// console.log(randomNumber)
// let userInput
// let count = 3

// for(let i = 0 ; i < 3 ; i++){
//     count = count - 1
//     userInput = Number(prompt('Please Guess the Number from 1 to 6'))
//     if(userInput == randomNumber){
//         console.log('You Guess the number right ')
//         break
//     }
//     else {
//         console.log('Incorrect Guess .. Try Gain ! '+ count + ' attempt left')
//     }

// }

// program 3

// let randomNumber = Math.floor(Math.random()* 6) + 1 // 4
// console.log(randomNumber)
// let count = 0
// let userInput ; // undefined
// while(userInput !== randomNumber){
//     count = count + 1
//     userInput = Number(prompt('Please Guess the number between one to six')) // 2 // 4
// }
// console.log('You Guess it correct'+ ' in ' + count + ' attempt ')



// Program 4 

// Guess the number  twice with out using loop ...

let randomNumber = Math.floor(Math.random()* 6) + 1
console.log(randomNumber)
let userInput = Number(prompt('Please Guess the number between one to six'))

let userGuess = false

if(randomNumber == userInput){
    userGuess = true
}
else {
    userInput = Number(prompt('Please Guess the number between one to six'))
    if(randomNumber == userInput){
        userGuess = true
    }
   
}
if(userGuess == true){
    console.log('Your Guess is correct !')
}
else {
    console.log('You Guess is incorrect')
}

//userGuess == true ?console.log('Your Guess is correct !'):console.log('You Guess is incorrect')




// console.log(Math.random()) // 0 to 0.9
// Math.random() * 6 // 0 to 5.99
// Math.floor(Math.random() * 6 ) // 0 to 5
// Math.floor(Math.random() * 6) + 1 // 1to 6
 
// let randomNumber = Math.floor(Math.random() * 6) + 1 
// console.log(randomNumber)
// let userInput = prompt('Enter your number') // string

// if(userInput == randomNumber){
//     console.log('your guess is correct')
// }
// else{
//     console.log('your guess is incorrect')
// }

// ------------------------------------------>

// program 2
// let randomNumber2 = Math.floor(Math.random() * 6) + 1  // 4
// console.log(randomNumber2)
// let userInput2;

// for(let i = 0 ; i < 3;i++){
//     userInput2 = prompt('Enter your number') //4
//     if(randomNumber2 == userInput2 ){
//         console.log('your guess is correct')
//         break

//     }

// }

// program 3
// let randomNumber3 = Math.floor(Math.random() * 6) + 1  // 3
// console.log(randomNumber3)
// let userInput3; // undefined

// while(randomNumber3 != userInput3){
//     userInput3 = prompt('Enter your number between 1 to 6') //3
 
// }
// console.log('you guess the correct number')


// program 4

// let randomNumber3 = Math.floor(Math.random() * 6) + 1  // 3
// console.log(randomNumber3)
// let userInput3; // undefined
// let score = 0

// while(randomNumber3 != userInput3){
//     userInput3 = prompt('Enter your number between 1 to 6') //3
//     score = score + 1
//     //score ++
 
// }
// console.log('you guess the correct number '+score+' attempts')


// let fullName = "chinmay"
// let lastName = "deshpande"
// console.log(fullName+' '+lastName)



// program 5

// let randomNumber3 = Math.floor(Math.random() * 6) + 1  // 3
// let userInput5;

// while(true){

//     userInput5 = prompt('Enter the number the between 1 tp 6')
//     if(userInput5 == randomNumber3){
//         console.log('you guess correcr')
//         break
//     }

// }






// Repeat

let randomNumber3 = Math.floor(Math.random() * 6) + 1  // 3
let userInput5;

// userInput5 = prompt('Enter the number between 1 to 6')
// // if(randomNumber3 ==  userInput5){
// //     console.log('your guess is correct')
// // }
// // else {
// //     console.log('you  guess is incorrect')
// // }


// progrm 2

// for(let i = 0 ; i < 3 ;i++){
//     userInput5 = prompt('Enter the number between 1 to 6')
//     if(randomNumber3 ==  userInput5){
//         console.log('your guess is correct')
//         break
//     }

// }

// program 3

// while(randomNumber3 != userInput5){
//     userInput5 = prompt('Enter the number between 1 to 6')
// }
// console.log('your guess is correct')

// program 4
// let count = 0

// while(randomNumber3 != userInput5){
//     userInput5 = prompt('Enter the number between 1 to 6')
//     count = count + 1
// }
// console.log('your guess is correct '+count+ ' attempts')


// program5 
// while(true){
//     userInput5 = prompt('Enter the number between 1 to 6')
//     if(userInput5 == randomNumber5){
//         console.log('your guess is correct ')
//         break;
//     }

//
