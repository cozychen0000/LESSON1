// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465


function fib(number){
    // add whatever parameters you deem necessary - good luck! 
    let result = 1;  
    let list = [0,1]; // 從number 從 1 開始 ，index從1開始抓資料 
    let count = 0

    function helper(number) {
        if(number === 0) return result;
        result = result + list[count];
        list.push(result);
        count++;
        console.log(list);

        return result + helper(number - 1)
    }

    helper(number); 

    return list[number]
  }

console.log(fib(1))