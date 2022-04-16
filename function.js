let a = 10
let b = 5
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

console.log('\n')


let a1 = 20
let b1 = 5
console.log(a1 + b1)
console.log(a1 - b1)
console.log(a1 * b1)
console.log(a1 / b1)
console.log(a1 % b1)

console.log('\n')

// function is used to reduce repeatation of code 

function calculator(a2, b2) {
    console.log(a2 + b2)
    console.log(a2 - b2)
    console.log(a2 * b2)
    console.log(a2 / b2)
    console.log(a2 % b2)

}
calculator(30, 5)
console.log('\n')


// passing parameter to the another type

// 1.without passing parameter and return type

function add() {
    console.log(10 + 20)
}
add()
add()
add()
add()

console.log('\n')

//2.passing parameter to the function and without return type
function sub(a3, b3) {
    console.log(a3 - b3)
}
sub(20, 40)
console.log('\n')

//3.passing parameter with return type
function multi(a4, b4) {
    return a4 * b4
}
let result = multi(200, 5)
console.log(result)
console.log('\n')

//types of function
// 1.function declaration
// 2.arrow function
// 3.funcction expression

//1.function declaration
function divi(a5, b5) {
    return a5 / b5
}
let result1 = divi(200, 5)
console.log(result1)
console.log('\n')


//2.arrow function
let arrow_Fun = (x, y) => {
    return x * y
}
let result2 = arrow_Fun(5, 5)
console.log(result2)

//3.function expression
let fun_Expe = function add1(x1, y1) {
    return x1 + y1

}
let result3 = fun_Expe(10, 20)
console.log(result3)


//Use the prototype property to add a new property to all objects of a given type:
function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
}
employee.prototype.salary = 2000;

console.log(employee)
const fred = new employee("Fred Flintstone", "Caveman", 1970);
console.log(fred)
console.log(fred.salary)
console.log(fred.name)