averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false

function averagePair(arr, avg) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return false;
    let left = 0;
    let right = arr.length - 1;

    while(left !== right) {
        let listAvg = ( arr[left] + arr[right] ) / 2;

        if( listAvg === avg ) return true;
        if( listAvg > avg ) {
            right--;
        }
        if( listAvg < avg ){
            left++;
        }
    }
    
    return false;
}

