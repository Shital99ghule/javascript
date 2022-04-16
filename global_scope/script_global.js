// var personAge=20
// let person={
//     personName:"Amol",
//     personSirName:"Bhagwat",
//     personAge:25,
//     display:function(){
//         console.log(this)
//         console.log(this.personAge)//and here value of this is person means object name
//         function display2(){
//             console.log(this.personAge)//25---theire value of this is window
//         }
//         display2()
//     }

// }
// person.display()

//global scope with arrow function
var personAge=20

let person={
    personName:'Amol',
    personSirName:'Bhagwat',
    personAge:25,
    display:function(){
        console.log(this.personAge)
        display2=()=>{
            console.log(this.personAge)

        }
        display2()
    }
    
}
person.display()
console.log(this)
console.log('-----------------------------')


// global scope
var e = 10;
function sum(){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

console.log(v)