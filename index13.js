// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(number){
   let result = 0 
   if(number === 0 ) return result;

   result = number + recursiveRange(number - 1);
   return result;
}

console.log(recursiveRange(6))