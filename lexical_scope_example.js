function addition(x,y){
    console.log(x+y)
}
addition(12,13)

//Lexical Scope

function add(){
    let x = 10 
    let y = 20
    //console.log(r+u)
    console.log(x+y) //30

    function add2 (){
        let r = 100
        let u = 20
        console.log(r+u+x+y) //120

        function add3(){

            let ii = 100
            let oo = 800

            console.log(ii+oo+x+y+r+u) // 900
            
        }
        add3()
    }
    add2()
}
add()

console.log('----------------example of in lexical scope---->multiplication')


function multi(){
    let x=10
    let y=5
    console.log(x*y)


    function multi1(){
        let p=5
        let q=5
        console.log(p*q*x*y)
    


    function multi2(){
        let p1=7
        let q1=5
        console.log(p1*q1*p*q*x*y)


    }
    multi2()
} 
multi1()
}
multi()