let ages = [11,22,33,44,11,22,33,44]



function printArr(arr,fn){
    let newArray = []
    for(let i = 0 ; i < arr.length ;i++){        
        newArray.push(fn(arr[i]))
    }
    return newArray
}
// let result=printArr()
// console.log(result)
 let above18 = function(el){
    return el > 3
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
//  console.log(sp)
//  console.log(rp)