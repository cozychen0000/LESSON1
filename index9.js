findLongestSubstring ( '' ) // 0 
findLongestSubstring ( 'rithmschool' ) // 7 
findLongestSubstring ( 'thisisawesome' ) // 6 
findLongestSubstring ( 'thecatinthehat' ) // 7 
findLongestSubstring ( 'bbbbbb' ) // 1 
findLongestSubstring ( 'longestsubstring' ) // 8 
findLongestSubstring ( 'thisishowwedoit' ) // 6 

function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
  let longestLen = 0;
  let start = 0;
  let end = 0;
  let sameStr = {};
  if(str==="") return longestLen;
  while( end < str.length) {
    const letter = str[end];
    sameStr[letter] = ( sameStr[letter] || 0 ) + 1;

    if(sameStr[letter]===1) end++;

    if(sameStr[letter] > 1) {
      delete sameStr[str[start]];
      start++;
    }

    longestLen = Math.max(longestLen,end - start);
  }
  console.log(longestLen);
  return longestLen;

  }
  