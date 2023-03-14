//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(number){
    let result = 1;
    if(number === 0 ) return result;

    result = number * factorial(number - 1);
    return result;

}

console.log(factorial(7))