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
 

// console.log(person2[1].skills[1])
console.log(person2[1].fn)


console.log('\n')

let [{fn:yyyy,skills:[nnnn]},{fn:pppp,skills:[kkkk,oooo]}] = person2

console.log(kkkk)


// let a, b,rest;
// [a, b] = [10, 20];
// console.log(a)
console.log('------------------------------')
let employee={
 employeeName:'shital',
 employeeId:70601,
 employeeCity:"Mumbai"
}
let {employeeName:ename,employeeId:eid,employeeCity:ecity}=employee
console.log(ename)
console.log(eid)
console.log(ecity)

console.log('------------------------------')


let family={
    family_member:7,
    relation:{
        father:'sunil',
        mother:'shobha',
        sister:'akshada',
        brother:'prasad',
        grandmother:'suman',
        relative:['ghule','gunjal','chaskar']

    }

}

let {family_member:fm,relation:{father:f,mother:m,sister:s,brother:b,grandmother:g,relative:[x,y,z]}}=family
console.log(fm)
console.log(f)
console.log(m)
console.log(s)
console.log(b)
console.log(g)
console.log(x)
console.log(y)
console.log(z)


console.log('------------------------------')

let Hospital=[
    {
        hospitalName:'kem',
        HospitalCity:'parel',
        Doctor:['raj','niketan','ketan'],
        doct_info:{
            doct_id:123,
            doct_city:'pune',
            dsignation:'senior dr'


        }
    }
]

let [{hospitalName:hn,HospitalCity:hc,Doctor:[x1,x2,x3],doct_info:{doct_id:d_id,doct_city:d_ct,dsignation:des}}]=Hospital
console.log(hn)
console.log(hc)
console.log(x1,x2,x3)
console.log(d_id)
console.log(d_ct)
console.log(des)



console.log('----------Array destructuring and Rest operator example-----------')
// rest/pread operator

//Array destructuring and Rest operator
let colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]; 
let  [...args]=colors
// console.log(color1);   
// console.log(color2);   
console.log(args); 

console.log('----------normal example-----------')


// let value=[10,20,30,40,50,60,70]
 //old javascript type
function add(a,b,c,d,e,f,g){
   return a+b+c+d+e+f+g
}
 let value_result=add(10,20,30,40,50,60,70)
 console.log(value_result)

 console.log('----------rest example-----------')

 function addition(...arr){
return arr
 }
 let value_result1=addition(10,20,30,40,50,60,70)
 
 console.log(value_result1)


 //rest parameter return the array
 console.log('----------rest example-----------')

function addi(...t){

    let sum =t.reduce(function(accu,el){
         return el + accu
    },0)
return sum
}
let value_result11=addi(10,20,30,40,50,60,70)
console.log(value_result11)

console.log('---------------rest 2nd example------------------')

//let ages = [18,12,33,22,44,22,26,32,41,22,66,88,99,11]

function above(a,...arr){
    let above_result=arr.filter(function(el){
        return el > a
    })
    return above_result
}
let res_abv=above(18,12,33,22,44,22,26,32,41,22,66,88,99,11)
console.log(res_abv)

let res_abv1=above(20,50,60,45,12,)
console.log(res_abv1)


 //spread
 //witout spred operator
let arr1=[10,15,20,25,30,35,30,45]
function sub(a,b,c){
    console.log(a-b-c)

}
sub(arr1[0],arr1[1],arr1[2])

//using spred operator

function div(x,y,z){
    console.log(x*y*z)
}
div(...arr1)