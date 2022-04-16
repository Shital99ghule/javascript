// let num1=10
// function global_var(){
//     let num=10
//     console.log(num)
//     function add(){
//         console.log(num+ num1)
//     }
//     add()
// }
// global_var()

//object 
// var Brother="niketan"
// let family={
//     Mother:'shobha',
//     Father:'sunil',
//     Brother:'prasad',
//     Sister:'Akshada',
//     // Relation:()=>{
//     //     console.log(this.Brother)
//     // }

//     display:function(){
//         console.log(this.Brother)
      

//         function display(){
//             console.log(this.Brother)
            
//         }
//         display()
//     }
   

// }
// family.display()

// let result=family.Relation()
// console.log(result)



// program to print a text 
// let a1 = "hello";

// function greet () {
//     console.log(a1);
// }

// greet(); // hello
// console.log('----------------------2nd example-------------')
// // program to show the change in global variable
// let a = "hello";

// function greet() {
//     a = 3;
// }

// // before the function call
// console.log(a);

// //after the function call
// greet();
// console.log(a); // 3


// console.log(`------------------3rd---------------------`)
// // program showing block-scoped concept
// // global variable
// let a = 'Hello';

// function greet() {

//     // local variable
//     let b = 'World';

//     console.log(a + ' ' + b);

//     if (b == 'World') {

//         // block-scoped variable
//         let c = 'hello';

//         console.log(a + ' ' + b + ' ' + c);
//     }

//     // variable c cannot be accessed here
//     console.log(a + ' ' + b + ' ' + c);
// }

// greet();


// // store input numbers
// const num1 = Number(prompt('Enter the first number '));
// const num2 = Number(prompt('Enter the second number '));

// //add two numbers
// const sum = num1 + num2;

// // display the sum
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// take the input from the user
// const number = prompt('Enter the number: ');

// const result = Math.sqrt(number);

// console.log(`The square root of ${number} is ${result}`);