validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram(first,second){
    // add whatever parameters you deem necessary - good luck!
     if(first.length !== second.length) return false;

     const loopup = {};

     for(let i = 0; i <= first.length; i++){
        let letter = first[i];
        loopup[letter] ? loopup[letter] += 1 : loopup[letter] = 1; 
     }

     for(let i = 0; i <= second.length; i++){
        let letter  = second[i]
        if(!loopup[letter]) return false;
        loopup[letter] -= 1;
     }
     console.log(first,true)
     return true
}
