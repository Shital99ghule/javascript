// function 

let names = ["chinmay", "sarika", "ram", "abhisha"]


let longest = names.reduce(function (acc, el) {

    // el ====> chinmay
    // acc ====> " "
    //acc ===============================> chinmay

    //el  ======sarika
    // acc ======> chinmay    ===>
    //acc ===============================> chinmay

    // el  =====> ram 
    // acc =====> chinmay
    // acc =============================> chinmay

    // el - abhishaa
    // acc - chinmay
    // acc--------- abhishaa

    if (el.length > acc.length) {
        return el
    }
    else {
        return acc
    }
}, " ")

console.log(longest)

let aaa = names.filter(function (el) {
    return el.length == longest.length
})
console.log(aaa)



// numbers


let numbers = [112, 33, 44, 55, 66, 11, 22, 3344, 555]

let max = numbers.reduce(function (acc, el) {
    if (el > acc) {
        return el;
    }
    else {
        return acc
    }
}, numbers[0])

console.log(max)

let min = numbers.reduce(function (acc, el) {
    if (el < acc) {
        return el;
    }
    else {
        return acc
    }
}, numbers[0])

console.log(min)

//--------------------------------------------------------------


let num = [444, 55, 1111, 22, 33]


let maxOne = num.reduce(function (acc, el) {
    //acc  ====> 444
    // el =====> 444  ---- 1st acc ===> 444
    // acc =====> 444
    // el  =====> 55 -------- 2nd ====> 444
    // acc =====> 444
    // el ====> 1111   ------- 3rd ====> 1111

    if (el > acc) {
        return el
    }
    else {
        return acc
    }
}, num[0])



//-------------------------------------------------------


let num2 = [444, 55, 1111, 22, 33]


let minOne = num2.reduce(function (acc, el) {
    //acc  ====> 444
    // el =====> 444  ---- 1st acc ===> 444
    // acc =====> 444
    // el  =====> 55 -------- 2nd ====> 444
    // acc =====> 444
    // el ====> 1111   ------- 3rd ====> 1111

    if (el < acc) {
        return el
    }
    else {
        return acc
    }
}, num2[0])

// 

console.log(minOne)
console.log(maxOne)

// 3 logical 

// passing number as paramter to another function

function addition(x, y) {
    console.log(x + y) // 25
    return x + y
}
let aaaa = addition(12, 13)
console.log(aaaa) // 25

// paramter but no argument
function addition2(x1, x2) {
    console.log(x1)
    console.log(x2)
    console.log(x1 + x2) // NaN
}
addition2()

// using passed arguments 
function addition3(x1 = 900, x2 = 500) {
    console.log(x1 + x2)
}
addition3(100, 50)

// using default value
function addition4(x1 = 900, x2 = 500) {
    console.log(x1 + x2)
}
addition4()



// passing string a parameter to function
let city = "pune"
function greet(word) {
    console.log('welcome ' + word)
}
greet(city)

// array as parameter to another function
let mx = [11, 22, 33]
function printArray(arr) {
    //  let arr =  [11,22,33]
    let sum = arr.reduce(function (acc, el) {
        return acc + el
    }, 0)
    console.log(sum)

}
printArray(mx)
// array as a parameter to another function 
let mina = [111, 22, 33, 44, 5566, 44]
function printArray2([a, b]) {
    console.log(a + b)
}
printArray2(mina)

// object as a paramter to another function

let person = {
    fullName: "chinmay",
    age: 10
}

function printObject(obj) {
    for (let key in obj) {
        if (key == "fullName") {
            console.log(key, obj[key])
        }
    }

}

printObject(person)


let student2 = {
    firstName:"chinmay",
    lastName:"deshpande"
}

function printName({firstName:fn,lastName:ln}){
    console.log(fn + ln)
}
printName(student2)