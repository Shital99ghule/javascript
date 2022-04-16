//find the positive and negative value from given aaray
let pos_neg=[10,20,-13,-25,56,-35,-31,55,44,-55]
// console.log(pos_neg.length)
//pos-->[10,20,56,55,44]
//neg--->[-13,-25,-35,-31,-55]
console.log('-----------using for loop----')
let pos_push=[]
let neg_push=[]
for(let i=0;i<pos_neg.length;i++){
    if(pos_neg[i] > 0){
        console.log(`no is positive  ${pos_neg[i]}`)
    }
    else{
        console.log(`no is Negaitive  ${pos_neg[i]}`)
    }
    
}

console.log('-----------using filter() find the positive number----')
let positive=pos_neg.filter(function(el){
    return el > 0
})
console.log(positive)
 
let total_sum=positive.reduce(function(acc,el){
    return acc + el
},0)
console.log(`The total sum of positive No is : ${total_sum}`)

console.log('-----------using filter() find the Negative number----')
let negative=pos_neg.filter(function(el){
    return el < 0
})
console.log(negative)

let total__neg_sum=positive.reduce(function(acc,el){
    return acc + el
},0)
console.log(`The total sum of Negative No is : ${total__neg_sum}`)






console.log(`The length of Main array ${pos_neg.length}`)
