countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(numberArr){
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    if(numberArr.length === 0 ) return left 
    for(let i = 1; i < numberArr.length; i++ ){
         if(numberArr[left] !== numberArr[i]){
            left += 1;
            numberArr[left] = numberArr[i]
        }
    }
    return left + 1 
  }