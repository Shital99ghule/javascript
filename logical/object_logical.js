let Bvoc_FY_Student = [
    {
        Student_name: 'shital Bhagwat',
        Skill: ['html', 'css', 'javascript', 'node js', 'sql'],
        birth_year: 1999,
        roll_no: 23,
        city: 'sangamner',
        isAdult: true,
        marks: [66, 77, 88, 99, 58, 99]
    },
    {
        Student_name: 'snehal jadhav',
        Skill: ['html', 'css', 'javascript',],
        birth_year: 1999,
        roll_no: 23,
        city: 'mumbai',
        isAdult: true,
        marks: [60, 77, 58, 99, 78, 99]
    },
    {
        Student_name: 'Rupali Shelke',
        Skill: ['html', 'css', 'javascript', 'sql'],
        birth_year: 1998,
        roll_no: 25,
        city: 'titwala',
        isAdult: true,
        marks: [64, 70, 80, 90, 58, 99]
    },
    {
        Student_name: 'pratiksha Kharade',
        Skill: ['css', 'javascript', 'node js', 'sql', 'python'],
        birth_year: 1998,
        roll_no: 26,
        city: 'pune',
        isAdult: true,
        marks: [56, 77, 88, 90, 48, 88]
    }
]

// program1
// people belong to pune city 
let a1 = Bvoc_FY_Student.filter(function (el) {
    return el.city === 'pune'
}).forEach(function (el) {
    console.log(`${el.Student_name}`)
})

console.log(`------------ \n `)
//program 2
// Name of those who age is greter than 32

let a2 = Bvoc_FY_Student.filter(function (el) {
    return 2022 - el.birth_year > 23
}).forEach(function (el) {
    console.log(`${el.Student_name}`)
})
// console.log(a2)
console.log(`------------ \n `)

//program 3
//average age of all students
let a3 = Bvoc_FY_Student.reduce(function (acc, el) {
    return acc + (2022 - el.birth_year)
}, 0) / Bvoc_FY_Student.length
console.log(a3)
console.log(`------------ \n `)

//program 4
// average marks of all students
let a4 = Bvoc_FY_Student.reduce(function (acc, el) {
    return acc + el.marks.reduce(function (acc, el) {
        return acc + el

    }, 0)
}, 0) / Bvoc_FY_Student.length

console.log(a4)

console.log(`------------ \n `)

//program 5
//// total number of skills with name
let a5 = Bvoc_FY_Student.forEach(function (el) {
    console.log(`${el.Student_name} :Skill : ${el.Skill} `)
})
console.log(`------------ \n `)

//program 6
// people belong to pune city and includes python skill

let a6 = Bvoc_FY_Student.filter(function (el) {
    return el.city == 'pune' && el.Skill.includes('python')
}).forEach(function (el) {
    console.log(`${el.Student_name}`)
})
console.log(`------------ \n `)

// program 7 
// same value for age and rollNumber
let a7 = Bvoc_FY_Student.filter(function (el) {
    return 2022 - el.birth_year === el.roll_no

}).forEach(function (el) {
    console.log(`${el.Student_name}`)
})

console.log(`------------ \n `)
