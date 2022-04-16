// let numbers = [11,22,33,44]


// let f = numbers[0]
// let g = numbers[1]
// let h = numbers[2]
// let i = numbers[3]

// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)

// let [a,b,c,d] = numbers
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// //------------------------------>
// //object 

// let person = {

//     fullName:"chinmay",
//     age:23,
//     rn:34

// }

// let {fullName:fn,age:ag,rn:roll} = person
// // console.log(fullName)
// // console.log(age)
// // console.log(rn)
// console.log(fn)
// console.log(ag)
// console.log(roll)

// //-------------------------------------------->


// //rutuja

// // program1

// let person3 = {

//     fullName:"chinmay",
//     rollNumber:12,
//     skills:["python","javascript"]
// }

// let { fullName:kn,rollNumber:gh,skills:[qwerty,qwerty2]} = person3
// console.log(qwerty)
// console.log(qwerty2)
// // shunbham


// let students = [

//     {
//         fullName:"chinmay",
//         age:23,

//     },
//     {
//         fullName:"amol",
//         age:40
//     }


// ]
// let [{fullName:aaa,age:ggg},{fullName:bbb,age:lll}] = students
// console.log(aaa)
// console.log(ggg)
// console.log(bbb)
// console.log(lll)

// //shraddha



// let family = {

//     parent:{

//             mother:"kanchan",
//             father:"shirish"
//     }


// }

// //[]
// // {}

// let { parent:{mother:ssss,father:vvvv}} = family

// console.log(ssss)
// console.log(vvvv)


// let vehicle = {
//     color:"red",
//     type:["sedane","suv"],
//     startType:{
//         one:"automatic",
//         two:"manual"
//     }
// }
// let {color:cl,type:[iii,ooo],startType:{one:hhj,two:hhk}} = vehicle
// console.log(hhj)
// console.log(hhk)

// // rest 

// function addition(...aaa){  //
//     console.log(aaa)     //
//     let sum = aaa.reduce(function(acc,el){
//         return acc + el
//     },0)

//     return sum
// }
// let total = addition(12,13,14,33,44,55,66,77,88,99,00)
// console.log(total)

// // spread

// let numberss = [11,22,33,44,55,66]

// function addition2(a,b,c){
//     console.log(a+b+c)

// }
// addition2(...numberss)
// // spread


//              0          1        2
let  names = ["chinmay","sarika","poorva"]

let aaa = names[0]
let bbb = names[1]
let ccc = names[2]
console.log(aaa,bbb,ccc)

// Destructuring 

let [aa,bb,cc] = names
console.log(aa)
console.log(bb)
console.log(cc)

//----------------->

let person = {
    fullName:"chinmay",
    age:23,
    rollNumber:34
}

let {fullName:fn,age:ag,rollNumber:rt} = person
console.log(fn)
console.log(ag)
console.log(rt)

// program one


let person4 = {

    fullName:"chinmay deshpande",
    age:23,
    skills:["python","javascript"]

}

let {fullName,age,skills:[aaaa,bbbb]} = person4
console.log(aaaa,bbbb)

let person5 = [

    {
        rollNumber:34,skills:['html','css']
    }
    ,
    {
        rollNumber:32,skills:['javascript','css3']
    }

]

let [{rollNumber:nnnnnn,skills:[yyyyy,ooooo]},{rollNumber:nrrr,skills:[yttttt,ooyyyooo]}] = person5


// program

let parent = {

    family:{

        mother:"kanachan",
        father:"shirish"
    }

}

let {family:{mother:mmm,father:fff}} = parent
console.log(mmm)
console.log(fff)

//----------------------------------------------->
// spread and rest operator



// function addition55(a,b,c){
//     console.log(a+b+c)
// }
// addition55(12,13,14,33,44,55,66,77,88,99,55)



function addition55(...r){
    console.log(r)
    let sum = r.reduce(function(acc,el){
        return acc + el
    },0)
    return sum
}
let total = addition55(12,13,14,33,44,55,66,77,88,99,55)
console.log(total)


//let ages = [18,12,33,22,44,22,26,32,41,22,66,88,99,11]

function above(a,...arr){
    let jkl=  arr.filter(function(el){
        return el > a
    })     
    return jkl
}

let rrr = above(18,12,33,22,44,22,26,32,41,22,66,88,99,11)
console.log(rrr)

let rrra = above(40,12,33,22,44,22,26,32,41,22,66,88,99,11)
console.log(rrra)
// ---------------------------------------------


//spread

let ages1 = [18,12,33,22,44,22,26,32,41,22,66,88,99,11]
function add(a,b,c){

    console.log(a+b+c)


}
add(ages1[0],ages1[1],ages1[2])


function add(a,b,c){

    console.log(a+b+c)


}
add(...ages)


// 11,22,33 ----> [11,22,33]--- // rest
// [11,22,33]---> 11,23,44 --- // spread

//----------------------------------->


let ages = [11,22,33,44,11,22,33,44]



function printArr(arr,fn){
    let newArray = []
    for(let i = 0 ; i < arr.length ;i++){        
        newArray.push(fn(arr[i]))
    }
    return newArray
}

 let above18 = function(el){
    return el > 18
 }

 let addTwo = function(el){
    return el + 2
 }

 let mulBy3 = function(el){
     return  el * 3
 }

 let dg= printArr(ages,above18)
 let sp =printArr(ages,addTwo)
 let rp = printArr(ages,mulBy3)

 console.log(dg)
 console.log(sp)
 console.log(rp)