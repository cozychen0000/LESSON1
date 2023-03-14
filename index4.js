areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

function areThereDuplicates(...factors) {
    // good luck. (supply any arguments you deem necessary.)
    //bonus 排列後找重複
    factors.sort(); 
    let left = 0;
    for(let i = 1; i < factors.length; i++ ){
        if(factors[left]===factors[i]) return true;
        left ++;
    } 
    // console.log(false);
    return false;
  }