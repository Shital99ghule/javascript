// function addition(x,y){

//     console.log(x+y)

// }
// addition(12,12)

// // Lexical scope 

// function add(){
//     let x = 10 
//     let y = 20
//     //console.log(r+u)
//     console.log(x+y) //30

//     function add2 (){
//         let r = 100
//         let u = 20
//         console.log(r+u+x+y) //120

//         function add3(){

//             let ii = 100
//             let oo = 800

//             console.log(ii+oo+x+y+r+u) // 900
            
//         }
//         add3()
//     }
//     add2()
// }
// add()
// //------------------------------------->


// function addition2(x,y){
//     console.log(x+y) // 46
//     return 12
//     console.log(x+y)
// }
// let qq = addition2(12,34)
// console.log(qq) //12 

// //----------------------------------->

// // closure

// function addition3(x,y){

//     //let x = 12
//     //let y = 13

//     return function(){
//         console.log(x+y)
//         return x +y 
//     }


// }
// let r = addition3(12,13)

// // let r = function(){
// //     console.log(x+y)
// //   return x +y 

// // }

// //let x = 10
// console.log(r)
// let jj = r()
// console.log(jj)

//-------------------------------------->


// let person = {


//     fullName:"chinmay deshpande",


// }


// --------------------------------->

function add (arra){
    for(let i = 0 ; i < arra.length;i++){
        console.log(arra[i])
    }

}
add([1,2,3])


for(let i = 0 ; i < 2 ; i++){
    function add(){
        console.log("hello")
    }
    add()
}