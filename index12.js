// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    let result = 1;
    if(arr.length === 0 ) return result;

    result = arr[0];
    arr.splice(0,1);

    result = result * productOfArray(arr)
    
    return result; 
}

console.log(productOfArray([]))