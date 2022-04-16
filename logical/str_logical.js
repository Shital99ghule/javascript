let str = "chaityna"
let a = ""
for (let i = 0; i < str.length; i++) {
    a = str[i] + a
}
console.log(a)

console.log(`-------------------------------`)

let a1 = ""
for (let i = str.length; i >= 0; i--) {
    a1 = a + str[i]
}
console.log(a1)

console.log(`-------------------------------`)
let b1="shital"
let b2="ghule"
let b3=`Amol`
// console.log(b1 + b2)
 console.log(`${b1} ${b2}`)
 console.log(b3)

 console.log(`-------------------------------`)
let a22
console.log(a22)

console.log(`---------------truthy and falsy value----------------`)
//truthy value----->true,Infinity,1,-1,a
//falsy value------>undefined,0,"",null,falsy

if(undefined){
    console.log(`hello.... This is truthy value`)
}
else{
    console.log(`Sorry....This is falsy value`)
}
console.log('------------------------')

if(0){
    console.log(`hello.... This is truthy value`)
}
else{
    console.log(`Sorry....This is falsy value`)
}

console.log('------------------------')

if(""){
    console.log(`hello.... This is truthy value`)
}
else{
    console.log(`Sorry....This is falsy value`)
}


console.log('------------------------')

if(null){
    console.log(`hello.... This is truthy value`)
}
else{
    console.log(`Sorry....This is falsy value`)
}


console.log('------------------------')

if(false){
    console.log(`hello.... This is truthy value`)
}
else{
    console.log(`Sorry....This is falsy value`)
}

console.log('-----------These all are falsy value-------------')


if(true){
    console.log(`hello.... This is truthy value`)
}
else{
    console.log(`Sorry....This is falsy value`)
}

console.log(`---------------------------------`)

if(Infinity){
    console.log(`hello.... This is truthy value`)
}
else{
    console.log(`Sorry....This is falsy value`)
}

console.log(`---------------------------------`)

if(1){
    console.log(`hello.... This is truthy value`)
}
else{
    console.log(`Sorry....This is falsy value`)
}

console.log(`---------------------------------`)

if(-1){
    console.log(`hello.... This is truthy value`)
}
else{
    console.log(`Sorry....This is falsy value`)
}
console.log(`---------------------------------`)

if(a){
    console.log(`hello.... This is truthy value`)
}
else{
    console.log(`Sorry....This is falsy value`)
}