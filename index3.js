sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

function sameFrequency(number1,number2){
    // good luck. Add any arguments you deem necessary.
    let number1Frequency = {};
    let number2Frequency = {};

    let str1 = number1.toString();
    let str2 = number2.toString();

    if(str1.length !== str2.length) return false;
    // 把兩個做排序後要相等 
    for(let i = 0; i < str1.length; i++){
        number1Frequency[str1[i]] = (number1Frequency[str1[i]] || 0) + 1;
    }
    for(let i = 0; i < str2.length; i++){
        number2Frequency[str2[i]] = (number2Frequency[str2[i]] || 0) + 1;
    }

    for(let key in number1Frequency){
        if(!(key in number2Frequency)) return false;
        if(number1Frequency.key !== number2Frequency.key) return false;
    }
    return true;
     
  }
