var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//expected op
let c=[]
    for(let i=0;i<a.length;i++){
let res=(`row : ${a[i]}`)

       if(!c.includes(res)){
           a.forEach(el => {
               c.push(a[el])
             
        
           });
           console.log(`row ${Array.from(Array(a[i]))}`)
       }
    }
console.log()
//op:row 1,2,1,24
// row 8,11,9,4
// row 7,0,7,27
// row 7,4,28,14
// row 3,10,26,7
let result=str=>str.split('').reverse().join('')
let res=result('silgate')
console.log(res)

// let d=[22, 44, 13, 16, 13, 26, 44]

// let aa=d.forEach(function(el){
//     console.log(`row ${d.indexOf(el)}`)
    
// })
console.log('-------------- using function------------------')

// let text = "";
// const fruits = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// fruits.forEach(myFunction);
// console.log(text)
// function myFunction(item,index) {
//   return  text += " row "+index + ' : '  +  item  ; 
// }
//output: row 0 : 1,2,1,24 row 1 : 8,11,9,4 row 2 : 7,0,7,27 row 3 : 7,4,28,14 row 4 : 3,10,26,7
//bt expcted: "row" 0  
                // 1
                // 2
                // 1
                // 24 
                //like