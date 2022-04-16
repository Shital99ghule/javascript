function add(...arr){
    // console.log(...arr)
    let total=0
for(let i of arr){
  total +=i
}
return total
}
let output=add(12,3,4,55,66,88,76,88,77)
console.log(output)
console.log(`-------------------rest example---------------`)
function fun(a,b,...c){
    console.log(`${a} ${b}`)//Ronaldo Naymar
    console.log(c)//Pele Messi Edan
    console.log(c[0])//Pele
    console.log(c.length)//3
    console.log(c.indexOf('Edan'))//2
}
fun('Ronaldo','Naymar','Pele','Messi','Edan')
