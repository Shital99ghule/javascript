//             0        1         2        3
let names = ["chinmay","poorva","sarika","Minal"]
let q = names[0]
let r = names[1]
let s = names[2]
let u= names[3]

console.log(q)
console.log(r)
console.log(s)
console.log(u)
console.log('---------')

let [a,b,c,d] = names
console.log(a)
console.log(b)
console.log(c)
console.log(d)
//-----------------------------------------

let person = {

    fullName:"chinmay deshpande",
    age:23,
    rollNo:34
}


let {fullName:fn,rollNo:rn,age:ag} = person
// console.log(fullName)
// console.log(rollNo)
// console.log(age)
console.log(fn)
console.log(rn)
console.log(ag)

//---------------------------------------------->




let students = {

    fullName:"chinmay deshpande",
    age:34,
    rollNumber:14,
    skills:["python","javascript"]


}
let { fullName:ffn , age:aag , rollNumber:rrn, skills:[aaa,bbb]} = students

console.log(ffn)
console.log(aag)
console.log(rrn)
console.log(aaa)
console.log(bbb)

students = {

    fullName:"chinmay deshpande",
    age:34,
    rollNumber:14,
    skills:["python","javascript"],
    parents:{

        father:"shirish",
        mother:"kanchan"

    }


}

let {fullName:zzz,age:ccc,rollNumber:fff,skills:[aaaaa,bbbb],parents:{father:ddddd,mother:mmmm}} = students
console.log(ddddd)
console.log(mmmm)

//------------------------------------------------------------------------>



let person2 = [

    {
        fn:"chinmay",
        skills:["python2"]
    },
    {
        fn:"sarika",
        skills:["python3",'javascript']
    }

]

let [{fn:yyyy,skills:[nnnn]},{fn:pppp,skills:[kkkk,oooo]}] = person2

// console.log(x)
// console.log(y)


// ---------------------------->


let i = {

        family:{

                parent:{

                        father:"shirish",
                        mother:"kanchan"

                }
        }

}
console.log('---------------------------------')

let { family:{parent:{father:fffff,mother:mmmmm}}} = i

console.log(fffff)
console.log(mmmmm)

//------------------------------------------------------

// spread and rest 



// function addition(a,b,c,d,e,f,g,h,i,j,k,l){

//     console.log(a+b.....)


// }

// addition(11,22,33,44,55,66,77,88,99,100,44,55,66,4)


function addition5(...t){
    //console.log(t)
    let sum =t.reduce(function(acc,el){
        return acc + el
    },0)
    return sum
}

let total = addition5(22,33,44,55,66,777,888,999,44,55,66,77,88)
console.log(total)

