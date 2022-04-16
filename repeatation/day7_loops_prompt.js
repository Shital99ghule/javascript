
// // program----->1st
// // let randomNumber = Math.floor(Math.random() * 6) + 1
// // console.log(randomNumber)
// // let myInput=Number(prompt("Enter your no between 0 and 1"))
// // if(myInput === randomNumber){
// //   console.log("Your guess is correct")

// // }
// // else{
// //   console.log("Sorry.......! Can you please tra again")
// // }


// // program----->2nd

// // //let random = Math.floor(Math.random() * 6) + 1 //5.99
// // // console.log(random)
// // // let count = 0
// // // for (let i = 0; i <= 3; i++) {

// // //     let myInput = Number(prompt("Enter the number between 1 to 5"))
// // //     count = count + 1
// // //     if (myInput == random) {
// // //         console.log('Your guess is right in ',+ count + ' attempt')
// // //     }
// // //     else {
// // //         console.log('Sorry...! please try again')
// // //     }

// // // }


// // program----->3rd

// // let random = Math.floor(Math.random() * 6) + 1//5.99
// // console.log(random)
// // // let myInput = Number(prompt("Enter the number between 1 to 5"))
// // let count = 0
// // let myInput;
// // while (myInput !== random) {
// //   count = count + 1
// //   myInput = Number(prompt("Enter the number between 1 to 5"))



// // }
// // console.log('Your guess is correct iN ', + count + ' attempt')


// // program----->4th

// let randomNumber = Math.floor(Math.floor.randomNumber() * 6) + 1
// let count=0
// let result = false
// let myInput=Number(prompt("Enter the number 1 to 6"))

//program 1
// let random_No = Math.floor(Math.random() * 6) + 1
// console.log(random_No)
// let userInput=prompt("Enter the number between 0 to 6")
// if(userInput == random_No){
//   console.log('Your guess is correct')
// }
// else{
//   console.log('Soryy..! Incorrect guess..Please try again')
// }


//program 2 using for loop
// let userInput;
// // if(userInput == random_No){
// for (let i = 0; i < 3; i++) {
//   userInput = prompt("Enter the number between 0 to 6")
//   if (userInput == random_No) {
//     console.log('Your guess is correct')
//     break
//   }
//   else {
//     console.log('Soryy..! Incorrect guess..Please try again')
//   }
// }

// let random_No = Math.floor(Math.random() * 6) +1
// console.log(random_No)
// let count = 0
// let userInput
// while (random_No != userInput) {
//   userInput = prompt('Enter the no between 0 to 6')
//   count = count + 1
//   count++
// }
// console.log('Your guess is correct in ', +count+   'attempt')

let randomNumber3 = Math.floor(Math.random() * 6) + 1  // 3
console.log(randomNumber3)
let userInput3; // undefined
let score = 0

while(randomNumber3 != userInput3){
    userInput3 = prompt('Enter your number between 1 to 6') //3
    score = score + 1
    score ++
 
}
console.log('you guess the correct number '+score+' attempts')

