


const fibonacci = (result, num) => {
  let a = result[0], b = result[1], f;
  for(let i = 2; i <= num; i++) {
    f = a + b;
    a = b;
    b = f;
    result.push(f)	
  };
    const lastNum = result[result.length-1];
    const penultimateNum = result[result.length-2];
    console.log(penultimateNum)
    return lastNum, penultimateNum;
};
fibonacci([0,1], 7)






// OR
//recursion/recursive function is when a function calls itself

   // let fibonacci =  function fib(num) {
   // 	if(num <= 2) {
   // 		return 1
   // 	}
   // 	return fib(num - 2) + fib(num - 1)
   // }
   // console.log(fibonacci(6))