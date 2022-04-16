for(let i = 0 ; i <=10 ;i++){
    if(i == 5){
        continue
    }
    if(i == 7){
        break
    }
    console.log(i)
    
}

let a = 1000
let b = 40000000000
let c = 560

// if(a > b){
//     if(a> c){
//         console.log('a is greater')
//     }
//     else {
//         console.log('c is greater')
//     }
// }
// else if(b > c){
//     console.log('b is greater')
// }
// else {
//     console.log('c is greater')
// }


// program 2

if(a > b && a >c){
    console.log('a  is greater')
}
else if(b > c){
    console.log('b is greater')
}
else {
    console.log('c is greater')
}
// program 3

// Tenary operator

let age = 18

// if(age  > 18){
//     console.log('you can drive !')
// }
// else {
//     console.log('you cannot drive !')
// }
age = 18
age > 18 ?console.log('you can drive !'):console.log('you cannot drive !')
let r = age > 18 ?'you can drive':'you cannot drive'
console.log(r)

66 > 56 && 88 === 88 ?console.log('you can'):console.log('you cannot')

// switch case 
// console.log(666 === '666') // false
// console.log(66 == '66') // true



// switch case - | without break

let city = "lucknow"

// switch(city){

//     case 'pune':
//         console.log('Maharashtra')
    
//     case 'indore':
//         console.log('Madhya Pradesh')
    
//     case 'lucknow':
//         console.log('Uttarpradesh')
    
//     default:
//         console.log('city not found')

// }


// with break
city = "mumbai"


switch(city){

    case 'pune':
 
        console.log('Maharashtra')
        break
    
    case 'indore':

        console.log('Madhya Pradesh')
        break
    
    case 'lucknow':
        console.log('Uttarpradesh')
        break
    
    default:
        console.log('city not found')
}

// switch(city){

//     case 'pune':
//     case 'mumbai':
//         console.log('Maharashtra')
//         break
    
//     case 'indore':
//     case  'bhopal':
//         console.log('Madhya Pradesh')
//         break
    
//     case 'lucknow':
//     case 'kanpur':
//         console.log('Uttarpradesh')
//         break
    
//     default:
//         console.log('city not found')
// }


// console.log(Math.floor(23.5))
// console.log(Math.ceil(23.4))
// console.log(Math.round(23.3))


// 0 to 0.99
console.log(Math.floor(Math.random() * 6) + 1)


// 1 , 2 ,4

// let ff = 1

// while(ff < 4){

//     if(ff == 3){
//         continue
//     }
//     console.log(ff)

//     ff++
    
// }

// 1 , 2 ,4

let ff = 0
while(ff < 4){

    ff++

    if(ff == 3){
        continue
    }
    console.log(ff) // 1 // 2 // //4

    
    
}


// let ff = 0
// while(ff < 4){

   
//     if(ff == 3){
//         break
//     }
//     else{
//         console.log(4)
//     }
//     console.log(ff) // 1 // 2 // //4
//     ff++

    
    
// }