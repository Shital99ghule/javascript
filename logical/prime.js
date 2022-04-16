console.log('-------------------prime no program--------------')   
//  function isPrime(num) {
//     for (let i = 2; i * i <= num; i++)
//     if (num % i === 0)
//     return false;
//     return num > 1;
//     }
//   let prime_no= isPrime(43)  
//   console.log(prime_no)

function primeFactorsTo(max)
{
    let store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}


console.log(primeFactorsTo(100));