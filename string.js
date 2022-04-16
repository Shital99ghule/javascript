let str_1="shital"
for(let i=0;i<str_1.length;i++){
    console.log(str_1[i])
}

console.log('\n')


//propert--length

console.log(str_1.length)
console.log('\n')


//string method
//1.charAt()
let my_Name= "Chaitanya"
let a=my_Name.charAt(6)
console.log(a)


let b=my_Name.charAt(my_Name.length-1)
console.log(b)

let c="India is my country"
//2.charCodeAt
let d=c.charCodeAt(9)
console.log(d)


//2.property-->constructor---->it rreturn the prototype
let e = c.constructor
console.log(e)

//3.endsWith()
let f=c.endsWith("country")///true bcz the given string is ends with country
console.log(f)

//4.startWith()
let g=c.startsWith('india')//false beacuse this method is case sensitive
console.log(g)

//5.includes()
let h=c.includes('In');///teru bcz In is present that given string 
console.log(h)

let text = "Hello World, welcome to the universe.";
let result = text.includes("world",12);//false bcz Find "world", start at position 12:
console.log(result)

//6.indxOf()
//eg.Search a string for "to":
let result1=text.indexOf("to")//21
console.log(result1)

//2.eg.Find the first occurrence of "e":
let ans=text.indexOf('e')
console.log(ans)


//3.eg.Find the first occurrence of "e", starting at position 5:
let ans1=text.indexOf('e',5)
console.log(ans1)

let ans2=text.indexOf('z')//-1 bcz value is not found
console.log(ans2)

//7.lastIndexOf()
let text1 = "Hello planet earth, you are a great planet.";
let result2 = text1.lastIndexOf("Planet");//-1 beacuse it is case sensitive language
console.log(result2)

//2.eg.Search for the last occurrence of "planet", starting at position 20:

let result4 = text1.lastIndexOf("planet", 20);//6
console.log(result4 )
