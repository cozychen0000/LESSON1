power(2,0) // 1
power(2,2) // 4
power(2,4) // 16

function power(number,square){
    let result = 1;
    if(square === 0) return result;

    result = number * power(number, square - 1 );
    return result
}

console.log(power(2,0));
console.log(power(2,2));
console.log(power(2,4));
