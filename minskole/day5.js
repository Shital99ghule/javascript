// for


// for(intialization; conditionCheck ; increment/decrement){

//     // statment
// }


// program 1 to 5

for(let i = 1 ; i <=5 ;i++){// 2 // 3 // 4 // 5 // 6

    console.log(i) 
    // 1
    // 2
    // 3
    // 4
    // 5
}

for(let i = 5 ; i >= 1 ;i--){ // 4 3 2 1
    console.log(i) 
    // 5
    // 4
    // 3
    // 2 
    //1
}

// Even no ---> 

// console.log(4 % 2)
// console.log(14 % 2)
// console.log(72 % 2)

// program3 

for(let i = 1 ; i <= 50 ; i++){
    if(i % 2 == 0){
        console.log('Even no',i)
    }
    else{
        console.log('Odd no',i)
    }
}

// program 4

for(let i = 2 ; i <= 20 ; i = i +2 ){ // 4  //6 // 22
    console.log(i) // 2
    // 4
    // 6
    // 20
}

// while loop

// 5 times ===> tell HEAD ---> for 
// toss till we get HEAD  ----> while


// intilization

// while(condition){
//     console.log(i)
//     // Increment / decremtn
// }


let aa = 1

while(aa <= 5){
    
    console.log(aa) // 1 // 2 // 3 // 4 // 5

    //Increment / Decrement 

    //aa += 1
    // aa = aa + 1
    aa ++ // 2 // 3 // 4 // 5 // 6
}


let aaa = 5
while(aaa >= 1){
    console.log(aaa) // 5 //4//3//2//1
    //Increment / Decrement 
    //aa += 1
    // aa = aa + 1
    aaa -- // 4,3,2,1
}

// 2,4,5

let ee =2 
while(ee <= 20){
    console.log(ee)
    ee = ee+2
}

// even odd

let bb = 1

while(bb <= 50){
    if(bb % 2 == 0){
        console.log('Even no',bb)
    }
    else{
        console.log('Odd no' ,bb)
    }

    bb ++
}

// break and continue

// break -- loop exist 

// continue -- next loop condition


for(let i = 1 ; i <= 5;i++){ // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 1 // 2
}

for(let i = 10 ; i >= 5 ; i--){ // 9 // 8 // 7
    if(i == 7){
        break
    }
    console.log(i) // 10 // 9 // 8

}

// continue 

for(let i = 1 ; i <= 5 ;i++){ //1 //2//3 // 4 // 5 // 6
    if(i == 2){
       continue
   }
   console.log(i) //1  // 3 // 4//5
}


// while loop 
let iii = 0 

while(iii <= 5){

    if(iii == 3){
        break
    }
    console.log(iii)
    iii ++


}

//-------------------------------------->
































// while 


// break  == > while  / for 


//continue ===>  while /for