let x=1
while(x<=10){
    if(x==5){
        break
    }
    console.log(x)
    x++
}

console.log('------------1st way----------')

while(x<=10){
    if(x==5){
        x++
        continue
    }
    console.log(x)
    x++

}
console.log('------------2nd way----------')
while(x<10){
    if(x==5){
        continue
    }
    console.log(x)
    x++
}


console.log('------------3rd program----------')
let myArray=[]
let xx=1
while(xx<=10){
    if(xx==5){
        xx++
        continue

    }
    myArray.push(xx)
   xx++
}
console.log(myArray)

console.log('------------4rd program----------')

let x1=2
let twosTable=[]
while(x1<=20){
    twosTable.push(x1)
    x1+=2
}
console.log(twosTable)

