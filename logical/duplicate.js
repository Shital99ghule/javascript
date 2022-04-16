

 console.log('---------------program 1 using indexOf()-----------------')

//find the duplicate number from array
let ary_1 = [22, 44, 13, 16, 13, 26, 44]
let arr_push = []
//using indexOf()
for (let i = 0; i < ary_1.length; i++) {
    if (arr_push.indexOf(ary_1[i]) < 0) {
        arr_push.push(ary_1[i])
    }
}

console.log(arr_push)

console.log('---------------program 1 using includes()-----------------')

for(let i=0;i<ary_1.length;i++){
    if(!arr_push.includes(ary_1[i])){
        arr_push.push(ary_1[i])
    }
}

console.log(arr_push)

console.log('---------------program 1 using filter()-----------------')
// let aaa= [22, 44, 13, 16, 13, 26, 44,11]
//[22,44,13,16,26,11]
let arr_filter=ary_1.filter(function(el,index){
    return ary_1.indexOf(el) == index
})
console.log(arr_filter)



// // program 3
// arr = [11,22,11,33,44,45,33]
// // [11,22,33,9]
// let cc = arr.filter(function(el,index){
//     return  arr.indexOf(el) == index
// })
// console.log(cc)



// // program 6


//  let arrR = [33,-44,33,22,33,55,-44,33,66,77,88,-99]

// let positive = arrR.filter(function(el){
//     return el > 0
// })
// console.log(positive)

// let depoist = positive.reduce(function(acc,el){
//     return acc + el
// },0)
// console.log(depoist)

// let negative = arrR.filter(function(el){
//     return el < 0
// })
// console.log(negative)

// let withdrawl = negative.reduce(function(acc,el){
//     return acc + el
// },0)
// console.log(withdrawl)



// let arr = [11,22,11,33,44,45,33]

// // o/p ---> [11,22,33,44,45]
// console.log('--------using includes()----------')

// let removeDuplicate = []  // [11,22]

// //includes()
// for(let i = 0 ; i < arr.length ; i++){
//     if(!removeDuplicate.includes(arr[i])){
//         removeDuplicate.push(arr[i])
//     }

// }
// console.log(removeDuplicate)

// // indexOf()
// // if the element is found --> return index 
// // else -1

// console.log('--------using indexOf()----------')

// // program 2
// arr = [11,22,11,33,44,45,33]
// removeDuplicate = [] // [11,22]
// for(let i = 0 ; i < arr.length ; i++){
//     if(removeDuplicate.indexOf(arr[i])<0){
//         removeDuplicate.push(arr[i])
//     }
// }
// console.log(removeDuplicate)

// console.log('--------using filter()----------')

// // program 3
// arr = [11,22,11,33,44,45,33]
// // [11,22,33,9]
// let cc = arr.filter(function(el,index){
//     return  arr.indexOf(el) == index
// })
// console.log(cc)


// // console.log('--------using filter()----------')

// // let cc2 = arr.filter(function(el,index){
// //     return el > 10
// // })
// // console.log(cc2)