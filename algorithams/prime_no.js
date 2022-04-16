
// for (let i = 2; i <= num; i++) {
//     if (num % i == 0){
//    console.log("number is prime" +i)
//     }
// }

// function  primeNo(n){


// }
var array = new Array(100);

for (var i=2 ; i<=array.length-1; i++) {
    if((i%2===0) || (i%3===0))
        continue;
    console.log(i+",");
}