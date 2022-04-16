//odd even program

let odd_even=[11,22,33,44,23,24,25,26,36,46,57,66,88,87,80]


// for(let i=0;i<odd_even.length;i++){
//     if(odd_even[i]%2==0){
//         console.log(`number is Even ${odd_even[i]}`)


//     }
//     else{
//         console.log(`number is odd ${odd_even[i]}`)
//     }
// }

//find even number using filter() and its sum
 odd_even=[11,22,33,44,23,24,25,26,36,46,57,66,88,87,80]

let even=odd_even.filter(function(el){
    return el % 2 == 0
}).reduce(function(acc,el){
    return acc +el
},0)
console.log(even)
console.log('----------------------find odd number and calculate the total even number program using filter()-----------------')

console.log('----------------------find odd number and calculate the total program using filter()-----------------')
let odd=odd_even.filter(function(el){
    return el % 2 == 1
}).reduce(function(acc,el){
    return acc +el
},0)
console.log(odd)
