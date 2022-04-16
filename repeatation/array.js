let a1 = [1979, 1989, 1999, 2005]
let r1 = []
//expected op-->[43,33,23,17]

for (let i = 0; i < a1.length; i++) {
    //console.log(a1[i])
    let current_age = 2022 - a1[i]
    r1.push(current_age)
  

}

console.log(r1)

console.log('---------------map()---------')
//is old type
//using Map()--->its work with each element of array
//return ----->array


let r_map=a1.map(function(el,index,arr){

return 2022 - el

})
console.log(r_map)

console.log('----------program 2')

//question---- find the above 40 no from given array ,
let a2=[20,34,40,50,49,79]
let r2=[]
//expected op -->[50,49,79]

for(let i=0;i<a2.length;i++){
    //console.log(a2[i])
    if(a2[i] > 40){
        r2.push(a2[i])
    }
}

console.log(r2)
console.log('---------------using filter()------')
//using fileter()-->work with the rray element when condition is true
//return-->array
let a_filter=a2.filter(function(el,index,arr){
    return el > 40
})
console.log(a_filter)

console.log('---------------------program 3----------------')

// calculate the totatl no of element

let a3=[20,30,50,44,66]
let sum=0
for(let i=0;i<a3.length;i++){
    sum=sum+a3[i]
}
console.log(sum)


console.log('--------------usilg reduce-------------')
//method-->reduce()--> work with every element 
//return----> single value
let a_reduce=a3.reduce(function(acc,el,index,arr){

return acc + el 

},0)
console.log(a_reduce)

console.log('-------------foreach()------')
//forEach()--->work withe every element of array
//return ---->nothing

let friend=['rupali','pratiksha','snehal','ruuja','monii']
 let a_foreach=friend.forEach(function(el,index,arr){
     console.log(`${el}  is my friend`)
 })

//map(),filter(),reduce(),forEach(),find(),every(),some(),findIndex()


console.log('-----------------------find()------------')
//find()-->it works every element of array and it returns that the 1st element of that array when test case is match
// when element it not found it reurns undefined
// let find_arr=['chaityna','niketan','ketan','ritesh','rahul']
let find_arr=[22,33,54,67,89]
let find_result=find_arr.find(function(el,index,arr){
    return el > 100
})
console.log(find_result)//undefined bcz no found element


console.log('----------------every()-----------------')
//every()-->it work each element of array and returns boolean value true  when condition is true for all array element,and when condition is false it also return false
//return-->boolean value true or false

let every_arr=[22,33,54,67,89]
let every_result=every_arr.every(function(el,index,arr) {
    return el >100
})
console.log(every_result)


console.log('----------------some()------------')
//some()-->it works with all eleemts of array,  if some element are find for test so it gives  true, or either  false
//return---> boolean value true or false
let some_arr=[22,33,54,67,89]
let some_result=some_arr.some(function(el,index,arr){
    return el > 50
})
console.log(some_result)



console.log('--------------findIndex()---------')
//findIndex()->it works the every element of array and find the index of given test element and return it index
//return ---->index of element and element is not found it return -1
let Index_arr=[22,33,54,67,89]
let findIndex_result=Index_arr.findIndex(function(el){
    return el > 100
})

console.log(findIndex_result)
 
//push(),pop(),shift(),unshift(),includes(),indexOf(),slice()
//concat(),splice(),join(),flat(),reverse(),sort(),fill()
//map(),filter(),reduce(),forEach(),find(),every(),some(),findIndex(),
     
console.log('---------concat-------------')
//concat-->it merge the two array
//return--->merging array and return it

let concat_arr1=[1,2,3,4,5]
let concat_arr2=[6,7,8,9]
let concat_result=concat_arr1.concat(concat_arr2)

console.log(concat_result)

console.log('----without using concat() merge the two array----')

let arr_merge=([...concat_arr1,...concat_arr2])
console.log(arr_merge)

console.log('-------splice()-------------')
//splice()--->it delete and and the element
//return---->delete element 
//splice(index position ,delete element num)
//                 0             1      2       3        4
let splice_arr=['chaityna','niketan','ketan','ritesh','rahul']
             //    -5          -4       -3      -2       -1 
// let splice_result=splice_arr.splice(2,2)//
// console.log(splice_result)
console.log('----------------')
// let splice_result1=splice_arr.splice(2,2,'manasvi')//
// console.log(splice_result1)
let splice_result1=splice_arr.splice(2,3,'ak')//rahul
console.log(splice_result1)
console.log(splice_arr)

console.log('----------------------join()----------')
//join()-->this method join the array given your special character
//return--->string
let join_arr=['shital','ghuleshital2gmail.com',7558280662]
let join_result=join_arr.join('-')
console.log(typeof(join_result))//string

console.log('---------------flat()-----------')
//flat()-->it merge all inner array and combine its onece
//return-->new array

//                 0       1       2
//             0 1  2 3   0 1 2  0  1 2
let flat_arr=[[1,2,3,4],[4,5,6],[7,8,9]]
// console.log(flat_arr[2][1])//8
let flat_result=flat_arr.flat()
console.log(flat_result)

console.log('----------reverse()-----------')
//reverse()--->reverse the given array
//return---> reverse array
let rever_arr=['shital','monii','sunii']
let rever_result=rever_arr.reverse()
console.log(rever_result)


console.log('-----------sort()-------------')
//sort()--->soorting hte arrya alphabetically
//return--->array

let sort_arr=['zebra','lion','tiger','fox']
let sort_result=sort_arr.sort()
console.log(sort_result)

console.log('--------fill()--------')
//fill()--->fill the element from condition
//return---->array
let fill_arr=['a','b','c','d','e']
// let fill_result=fill_arr.fill('g',3)
let fill_result=fill_arr.fill('g',1,3)

console.log(fill_result)


console.log('---------------form()---------------')
//form()---->method returns an array from any object with a length property
//return---->

let text = "ABCDEFG"
let text_result=Array.from(text)
console.log(text_result)

let num_1=123456789
let num_arrow= num =>Number(num)
let num1_result=Array.from(String(num_1),num_arrow)
console.log(num1_result)

//or using split()
let myArr = String(num_1).split("").map((num_1)=>{
    return Number(num_1)
   })
  console.log(myArr)

// let myInt=123456
// let myFunc = num => Number(num);
// var intArr = Array.from(String(myInt), myFunc);
// console.log(intArr);


let arr1=[1, 2, 3, 4, 2, 7, 8, 8, 3];
let arr_duplicate=[]
for(let i=0;i<arr1.length;i++){
    if(!arr_duplicate.includes(arr1[i])){
        arr_duplicate.push(arr1[i])
    }
}
console.log(arr_duplicate)
