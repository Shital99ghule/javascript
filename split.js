// let myInt=123456
// let myFunc = num => Number(num);
// var intArr = Array.from(String(myInt), myFunc);
// console.log(intArr);

//Array.from(object, mapFunction, thisValue)
// The JavaScript Array from() method returns an Array object from any object with a length property or an iterable object

// let a=12345
// let x=Array.from(String(a))
// console.log(x)
// let myStr="GeeksForGeeks"
// var myArr = Array.from(myStr);
//     console.log(myArr)

// let myInt=123456
// let myFunc = num =>Number(num);
// var intArr = Array.from(String(myInt), myFunc);
// console.log(intArr);

// let A= 1234
// let x= Array.from(Number(a))
// Console.log(x)


// Declare a variable and store an
// integer value
let num =235345
//  let num ="Welcome"
 
// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers
  
let myArr = String(num).split("").map((num)=>{
  return Number(num)
})
//map() creates a new array from calling a function for every array element.
console.log(myArr)