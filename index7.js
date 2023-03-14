maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

function maxSubarraySum(arr,number){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < number) return null;
    let maxNumber = -Infinity;
    let curNumber = 0;

    for(let i = 0; i < number; i++) {
        curNumber += arr[i];
    }

    for (let i = 0; i < (arr.length - number); i++) {
        curNumber = -arr[i] + curNumber + arr[i + number];
        if( curNumber > maxNumber) maxNumber = curNumber;
    }
    return maxNumber;
  }