     //        0        1        2       3      4  
let fruits=['banana','apple','papaya','kevi','grapes']
console.log(fruits.length)

//destructuring of array
 let des=[a,b,c,d,e]=fruits
 console.log(e)
// CRUD operation on Array 
//create
console.log(fruits.push('mango'))//add the element from last in arrya
console.log(fruits.unshift('jack-Fruit'))//add the element from begening in arrya

console.log(fruits)

//retrive
console.log(fruits[0])
console.log(fruits[3])

//update 
console.log(fruits.splice(2,1,'chiku'))
console.log(fruits)

//delete 
console.log(fruits.pop())//delete the element from last 
console.log(fruits.shift())//delete the element from begening
console.log(fruits.splice(2,1))//delete the element in array  -->the 2 is a index of element 
                            //and 1 is how many element are delete

console.log(`${fruits}`)

for(let i=0;i<fruits.length;i++){
    console.log(i)//gives only index of fruits  array
}

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])//gives value of fruits  array
}


 console.log('----------------start the object topic--------')

 let hospital={
     hospital_name:'Tata Hospital',
     hospital_id:1234,
     hospital_add:'Parel',
    //  hospital_phone:1234567890
 }
 //perform the CRUD operation
 //we can access the data from object using (.) notataion and ([])notation

 //Create(add) operation using . and [] notation
 //hospital_add:'Parel',
 //hospital_phone:1234567890
  //add the hospital add and phone 
  hospital.hospital_add="Parel"
  hospital['hospital_phone']=1234567890
  console.log(hospital)

//retrive data from object using . and [] notation
console.log(hospital.hospital_name)
console.log(hospital['hospital_add'])


//update data using . and [] notation
  hospital.hospital_name='KEM'
  hospital['hospital_add']="Mumbai,Parel"
  console.log(hospital)

//delete data using . and [] notation
delete hospital.hospital_add
delete hospital['hospital_add']
console.log(hospital)
  //Update the data from object using . and [] notation

for(let key in hospital){
    console.log(key);//only gives the key
}

for(let key in hospital){
    console.log(key,hospital[key]);//only gives the key
}


console.log('----------------------array from object-----------')


let employee=[
{
    employeeName:'shital',
    employeeECN:10601,
    employeeCity:'Airoli'
},

{
    employeeName:'Chaitayna',
    employeeECN:10602,
    employeeCity:'Ghansoli'
},
{
    employeeName:'Roshan',
    employeeECN:10603,
    employeeCity:'kalyan'
},
{
    employeeName:'Niketan',
    employeeECN:10604,
    employeeCity:'Bhandup'
},


]

//Apply the CRUD operation from array
console.log(employee[0])
console.log(employee[employee.length-1])
console.log(employee[3].employeeName)
console.log(employee[2]['employeeCity']="bhivandi")
console.log(employee)
console.log(employee[1].employeeDes="web designer")
console.log(employee)

// array of object destructuring
let empDES=[{employeeName:a1,employeeECN:b1,employeeCity:c1},{employeeName:aa,employeeECN:bb,employeeCity:cc},{employeeName:aaa,employeeECN:bbb,employeeCity:ccc},{employeeName:aaaa,employeeECN:bbbb,employeeCity:cccc}]=employee
console.log(cccc)

for(let i=0;i<employee.length;i++){
    let result=employee[i]
    for(let key in result){
        console.log(key,result[key])
    }
}
