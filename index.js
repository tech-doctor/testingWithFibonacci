 const input = document.querySelector('.input');
 const Line1 = document.querySelector('.Line1');
 const Line2 = document.querySelector('.Line2');
 const Line3 = document.querySelector('.Line3');
 const Line4 = document.querySelector('.Line4');
 const Line5 = document.querySelector('.Line5');

 
  const  myFunction = (event) => {
    event.preventDefault();
    const inputValue = input.value;
    //fibonacci([0,1], inputValue)
    const {lastNum, penultimateNum, antePenultimateNum,  result} = fibonacci([0,1],inputValue)
    const resultSpace = result.join(', ');
    Line1.innerHTML = `F<small>n</small> = F<small>(n-1)</small> + F<small>(n-2)</small>`
    Line2.innerHTML = `F<small>${inputValue}</small> = F<small>(${inputValue} - 1)</small> + F<small>(${inputValue} - 2 )</small>`
    Line3.innerHTML = `F<small>${inputValue}</small> = F<small>(${inputValue-1})</small> + F<small>(${inputValue-2} )</small>`
    Line4.innerHTML = `F<small>${inputValue}</small> = ${penultimateNum} + ${antePenultimateNum}`
    Line5.innerHTML = `F<small>${inputValue}</small> = ${lastNum}.`

    console.log(result)
  }



  

const fibonacci = (result, num) => {
  let a = result[0], b = result[1], f;
  for(let i = 2; i <= num; i++) {
    f = a + b;
    a = b;
    b = f;
    result.push(f)	
  };
    const lastNum =  result[result.length-1];
    const penultimateNum = result[result.length-2];
    const antePenultimateNum = result[result.length-3];
    //console.log(lastNum)
    return{
      result,
      lastNum, 
       penultimateNum,
       antePenultimateNum
    };
};

//fibonacci([0,1], 7)



// OR
//recursion/recursive function is when a function calls itself

   // let fibonacci =  function fib(num) {
   // 	if(num <= 2) {
   // 		return 1
   // 	}
   // 	return fib(num - 2) + fib(num - 1)
   // }
   // console.log(fibonacci(6))