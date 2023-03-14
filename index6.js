isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1,str2) {
    // good luck. Add any arguments you deem necessary.
    let i = 0;
    
    for (let j = 0; j < str2.length; j++) {
        if(str1[i] === str2[j]){
            i++;
        }
    }

    if(i===str1.length) return true;
    return false;
    
  }