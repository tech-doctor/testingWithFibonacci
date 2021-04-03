  // Accessing the DOM 
  const input = document.querySelector('.input');
  const Calculation = document.querySelector('.calculation')

 // function that runs when the value is being submitted
  const  submitValue = (event) => {
    event.preventDefault();
    const inputValue = input.value;
    //passing the value from fibonacci() function by destructuring
    const {a, lastNum, penultimateNum, antePenultimateNum,  result} = fibonacci([0,1],inputValue)
    // include a space after every comma in  the array list
    const resultSpace = result.join(', ');
    const calculationDetails =  `
      <p>F<small>n</small> = F<small>(n-1)</small> + F<small>(n-2)</small></p>
      <p>F<small>${inputValue}</small> = F<small>(${inputValue} - 1)</small> + F<small>(${inputValue} - 2 )</small></p>
      <p>F<small>${inputValue}</small> = F<small>(${inputValue-1})</small> + F<small>(${inputValue-2} )</small></p>
      <p>F<small>${inputValue}</small> = ${penultimateNum} + ${antePenultimateNum}</p>
      <p>F<small>${inputValue}</small> = ${lastNum}.</p>
      <p> The  first ${inputValue} terms of the fibonacci sequence are ${resultSpace}</p>
      `
    if(inputValue < 0 ){
      Calculation.innerHTML = `<p class = "negative-display">Enter a positive whole number and try again...</p>`
    }
    else if(inputValue >= 2){
      Calculation.innerHTML = calculationDetails; 
    } 
    else if(inputValue == 0){
      Calculation.innerHTML = `<p>F<small>${inputValue}</small> = 0.</p>
      <p> The  first ${inputValue} terms of the fibonacci sequence is ${a}</p>`
    }
    else{
      Calculation.innerHTML = `<p>F<small>${inputValue}</small> = 1.</p>
      <p> The  first ${inputValue} terms of the fibonacci sequence are ${resultSpace}</p>`
    }

    //console.log(event.target)
    
  }




   const  fibonacci = (result, num) => {
    let a = result[0], b = result[0] + 1, f
    for(let i = 2; i <= num; i++) {
      f = a + b; a = b; b = f;
      result.push(f)	
    };
      const lastNum =  result[result.length-1];
      const penultimateNum = result[result.length-2];
      const antePenultimateNum = result[result.length-3];
      if(num == 0){
        return{
          a,
          result, lastNum, penultimateNum, antePenultimateNum
        }
      } else{
        return{
          result, lastNum, penultimateNum, antePenultimateNum
        };
      }
      
      console.log(result)
  };

  // define(function (require, exports, module) {
  //   module.exports = fibonacci;
  // })
  module.exports = fibonacci;
  
 
  // console.log(module.filename);
  // console.log(module.id);
  // console.log(module.exports);

  // OR
  //recursion/recursive function is when a function calls itself

  // let fibonacci =  function fib(num) {
  // 	if(num <= 2) {
  // 		return 1
  // 	}
  // 	return fib(num - 2) + fib(num - 1)
  // }
  // console.log(fibonacci(6))