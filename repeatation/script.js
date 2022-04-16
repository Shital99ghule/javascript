//asignment operator
// +,-,*,/,%
let h = 15
h = h + 1
console.log(h)
h += 2
console.log(h)

console.log('-------------------')

let i = 15
i = i - 15
console.log(i)
i -= 15
console.log(i)
console.log('-------------------')

let j = 2
j = j * 3
console.log(j)
j *= 3
console.log(j)
console.log('-------------------')

let k = 5
k = k / 2
console.log(k)
k /= 2
console.log(k)
console.log('-------------------')

let l = 4
l = l % 2
console.log(l)
//or
l %= 2
console.log(l)

console.log('-------------comparision operator-------------------')

//comparision operator
// < ,>,<=,>=,==,!=,===,!==
console.log(5 < 10)
console.log(10 >= 15)
console.log(6 != 10)
console.log(10 == 10 && 10 === '10')


//logical operator
//logical &&
// true and true ====>true
// true and false ===>false
// false and true ==>false
// false and  false ==>false

//logical ||
// true and true ====>true
// true and false ===>true
// false and true ==>true
// false and  false ==>false

let noofTickets = 10

if (noofTickets <= 20 && noofTickets >= 10) {
    console.l('5 % discount')
}

if (noofTickets > 20 && noofTickets >= 10) {
    console.log('10% discount')
}

