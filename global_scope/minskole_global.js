// // // user defined 
// // // templat to create same multiple objects with different

// // let amol = {
// //     fullName:"amol rao",
// //     age:23,
// //     skills:['python']
 
// // }
// // class Person {
// //     constructor(fullName,age,roll){
// //         this.fullName = fullName
// //         this.age = age
// //         this.roll =roll
// //     }
// // }

// // let amol2 = new Person("shubham",23,44)
// // console.log(amol2)


// // // ------------------------------------>

// // class Person3  {

// //     displayFullName(fullName){
// //         this.fullName = fullName

// //     }

// //     displayRoll(roll){
// //         this.roll = roll

// //     }

// //     displayAge(age){
// //         this.age = age
        
// //     }

// // }

// // let amol4 = new Person3()
// // amol4.displayAge(12)
// // amol4.displayRoll(12)
// // amol4.displayFullName("chinmay deshpande")
// // console.log(amol4)
// function addition(){
//     let x = 10 
//     let y = 20
    
//     console.log(x+y) // 30

//     function addition2(){

//         let a = 40
//         let b = 60

//         console.log(x+y)
//         console.log(a+b)
//         //console.log(r+j)

//         function addition3(){
//             let r = 200
//             let j = 300
//             console.log(a+b) //
//             console.log(x+y)
//             console.log(r+j)
//         }

//         addition3()

//     }

//     addition2()



// }

// addition()


// function addition4(x,y){

//     console.log(x+y)// 25
//     return x + y 
//     console.log(x+y) // 25

// }

// let rrr = addition4(12,13)
// console.log(rrr) //25



// function addition5(x,y){

//     let  add = function(){
//         console.log(x+y)

//     }
//     return add
// }

// let uuu = addition5(12,13)
// console.log(uuu)
// uuu()


//--------------------------------------------->


function addition6(x,y){

    console.log(x+y)
    return x + y


}
let r = addition6(12,13)
console.log(r)



let  addition7 = function(x,y){

    console.log(x+y)
    return x + y

}
let raa = addition7(12,13)
console.log(raa)

let  addition8 = (x,y)=>{
    console.log(x+y)
    return x + y
}
let ra = addition8(12,13)
console.log(ra)

var fullName = "ram D"


let person  = {

    fullName:"chinmay d",
    rollNo:23,
    age:34,
    display:function(){
        console.log(this)
        console.log(this.fullName) // this ===> person

        // function display2(){
        //     console.log(this.fullName) //===> window
        // }

        // display2()
    }

}

// person.display()

// cypress ----> js 

var fullName = "chinmay2"
//var x = 10
//console.log(window.x)
let person = {
    
    fullName:"chinmay",
    age:23,
    display:function(){
        console.log(this.fullName)
        // person

        function display2(){
            console.log(this.fullName)
            // window
        }

        display2()
    }

}
console.log(this)
person.display()


//

fullName = "chinmay2"
//var x = 10
let person = {
    
    fullName:"chinmay",
    age:23,
    display:function(){
        console.log(this.fullName)

        let display2 = ()=> {
            console.log(this.fullName) 
        }

        display2()
    }

}
console.log(this)
person.display()



fullName = "chinmay2"
var x = 10
let person = {
    
    fullName:"chinmay",
    age:23,
    display:()=>{
        console.log(this.fullName)

        let display2 = ()=> {
            console.log(this.fullName) 
        }

        display2()
    }

}
console.log(this)
person.display()



var age   = 20
let vehicle = {
    color:"red",
    age:23,
    displayAge:()=>{
        //console.log(this)
        console.log(this.age)
        let display3 = ()=>{
            console.log(this)
            console.log(this.age)
        }
        display3()
    }

}
vehicle.displayAge()