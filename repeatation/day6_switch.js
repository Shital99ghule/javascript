
//use continue and break in one program
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue
    }
    if (i == 7) {
        break
    }

    console.log(i)
}

console.log('-----------continue and break in one program------')


//find the following element a,b,c which is big

let a, b, c
a = 6000
b = 10000
c = 70000

// if (a > b) {
//     if (a > c) {
//         console.log('a is big')
//     }
//     else {
//         console.log('c is big')
//     }
// }
//     else if(b > c){
//         console.log('b is big')
//     }

// else {
//         console.log('c is big')
//     }


console.log('---------------find the big element-------------')

a = 600000
b = 10000000000000000000
c = 70000

if (a > b && a > c) {
    console.log('a is greater')
}

else if (b > c) {
    console.log('b is grater')
}

else {
    console.log('c is greater')
}

//ternary operator
console.log('---------------find the big element-------------')

let age = 10
//1st way
age > 21 ? console.log('You can drive') : console.log('you cannot drive')

//storing the ternary operator in varible

let result = age > 21 ? console.log('You are eligible') : console.log('You are not eligible')

//using two condition in ternary  operator

age > 50 && 60 === 60 ? console.log('you are right') : console.log('something went wrong')


console.log('-------------------ternary operator end---------------')


//switch case
//switch case without break

let city = 'mumbai'
switch (city) {
    case "mumbai":
        console.log('maharashtra')

    case "bhopal":
        console.log('madhyapradesh')

    case "kerla":
        console.log('karnataka')

    default:
        console.log('no city no state presented')
}

console.log('------------switch case without break-------------')

//switch case with break
let village = "hivargaon"
switch (village) {
    case "khandgaon":

        console.log('Your tel is sangamner')
        break

    case "sayale":
        console.log('Your tel is Sinner')
        break
    case "javlke":
        consolel.log('Your tel is Kopergaon')
        break
    default:
        console.log('No city Found')
        break
}


//switch case with break and multiple value

console.log('-------------------switch case with multiple value-------------')
village = "hivargaon"
switch (village) {
    case "khandgaon", "nimaj", "gunjalwadi":

        console.log('Your tel is sangamner')
        break

    case "sayale", "vavi":
        console.log('Your tel is Sinner')
        break
    case "javlke":
        consolel.log('Your tel is Kopergaon')
        break
    default:
        console.log('No city Found')
        break
}

console.log('------math operation------------')
//math operation


//floor
//return the gretest integer less than or equal to its numeric number
console.log(Math.floor(30.66))//op -->30
console.log('------math floor operation------------')


//ceil
//return the smallest integer greater than or equal to its numeric number
console.log(Math.ceil(30.2))//op -->31
console.log('------math ceil operation------------')

//round
console.log(Math.round(30.4))//op-->30
console.log('------math round operation------------')


//round
//returns the supplied numeric expression rounded to the nearest integer
console.log(Math.round(30.5))//op-->31
console.log('------math round operation------------')


//random
// return the pseudorandom number between 0 and 1
console.log('------math random operation------------')
console.log(Math.floor(Math.random() * 6) + 1)




