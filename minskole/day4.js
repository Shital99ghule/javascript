// for - definite 

// for(intilization; conditionCheck,increment/Decrement){


// }

// variable let  i = 0


for (let i = 0; i <= 5; i++) { // 1 // 2 // 3//4//5
    console.log(i)
    //1st time ====> // 0
    //2ndt time ====> // 1
    //3rd time ====> // 2
    //4th time ====> // 3
    //5rd time ====> // 4
    //6th time ====> // 5
}

// let y = 0
// for(; y <=5 ; ){ 
//     console.log(y) 
//     y++

// }

// 1 3 5 7 9

for (let i = 1; i <= 9; i = i + 2) {  // 3 ====> 9
    console.log(i) // 1 , 3 , 5, 7, 9
}


// 20 % 2 == 0
// 14 % 2 == 0

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log('Number is even', i)
    }
    else {
        console.log('Number is odd', i)
    }
}


// 10  9  8  7 6 5 
// 10 ,8 ,6, 4, 2 
for(let  i = 10 ; i >=5 ; i--){
    console.log(i) // 10
}

for(let  i = 10 ; i >=2 ; i -= 2){ // i = i - 2
    console.log(i) // 10
}


for(let i = 5; i < 10; i++){ // 6 ====> 10
    console.log(i)  // 5,6,7,8,9
}

// loop -- 1 - 10
// loop 10 -1
// 5 , 10 , 15-----------
// 50 , 45 


//----------------------------------------
// while


//  1 to 10 

// // Intialization
// while(condition){
//     console.log(i)
//     //increment / Decrement
// }

console.log('------------ While -------------')
let i = 1
while(i <= 10){
    console.log(i) //1
    // i = i + 1 
    // i += 1
    i ++ //2
}

let r = 10
while(r >= 0){
    console.log(r)
    r --
}

let o = 1

while( o <= 50){

    if(o%2 == 0){
        console.log('Even' ,o)
    }
    else{
        console.log('Odd',o)
    }

    o ++
}

// 10 ,8 ,6, 4, 2 

let l = 10

while( l >= 2){

   console.log(l)

   l -= 2
}

// break statement , continue

console.log('break ----')
for(let i = 0 ; i < 5 ; i++){
    if(i == 2){
        break;
    }
    console.log(i) // 0 ,1

}

for(let i = 0 ; i < 5 ; i++){ //2
    
    if(i == 2){
        continue
    }
    console.log(i) // 0 ,1 ,3 ,4

}