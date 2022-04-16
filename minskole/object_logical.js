let students = [

    {
        fullName:"chinmay deshpande",
        rollNumber:12,
        skills:["python","javascript","sql"],
        marks:[89,90,91,89,99],
        city:"pune",
        isAdult:true,
        birthYear:1990
    },

    {
        fullName:"poorva vyas",
        rollNumber:23,
        skills:["python3","java","sql"],
        marks:[89,92,91,82,96],
        city:"nagpur",
        isAdult:false,
        birthYear:1989
    },

    {
        fullName:"sarika pansare",
        rollNumber:23,
        skills:["python3","java","sql","html"],
        marks:[89,90,91,89,99],
        city:"mumbai",
        isAdult:true,
        birthYear:1999
    },
    {
        fullName:"abhisha Burande",
        rollNumber:34,
        skills:["python3","java","sql","c#"],
        marks:[94,90,91,89,99], 
        city:"pune",
        isAdult:true,
        birthYear:1988
    }

]

// people belong to pune city 


console.log('filtered object')

//case 1

// let rr = students.filter(function(el){
//     return el.city === "pune"
// })
// rr.forEach(function(el){
//     console.log(el.fullName)
// })

// case 2

// students.filter(function(el){
//     return el.city == "pune"
// }).forEach(function(el){
//     console.log(el.fullName)
// })


// Program 2
// Name of those who age is greter than 32

// students.filter(function(el){
//     return (2022  - el.birthYear > 30)
// }).forEach(function(el){
//     console.log(el.fullName)
// })


// program 3

// average age of all students
// let avgAge = students.reduce(function(acc,el){
//     return acc + (2022 - el.birthYear)
// },0)/students.length
// console.log(avgAge)


// program 4
// average marks of all students
let avgMarks = students.reduce(function(acc,el){
    return acc + el.marks.reduce(function(acc,el){
            return acc + el
    },0)

},0)/students.length

console.log(avgMarks)


// program 5
// total number of skills with name
// chinmay deshpande:4

students.forEach(function(el){
    console.log(`${el.fullName}:${el.skills.length}`)
})

// program 6
// people belong to pune city and includes python skill
students.filter(function(el){
    return el.city === "pune" && el.skills.includes('python')
}).forEach(function(el){
    console.log(el.fullName)
})


// program 7 
// same value for age and rollNumber

students.filter(function(el){
    return 2022-el.birthYear === el.rollNumber

}).forEach(function(el){
    console.log(el.fullName)
})

// program 8

// every person is above30
let t = students.every(function(el){
    return  2022 - el.birthYear > 20
})
t === true?console.log('Every one above 20'):console.log('fail')


//Archit - fail
// for(let i = 0 ; i < students.length ;i++){


//     for(let x = 0 ; i < students.length ; x++){

//         if(students[i] )


//     }

// }