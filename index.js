  // Accessing the DOM 
  const input = document.querySelector('.input');
  const Calculation = document.querySelector('.calculation')

 // function that runs when the value is being submitted
  const  submitValue = (event) => {
    event.preventDefault();
    const inputValue = input.value;
    //passing the value from fibonacci() function by destructuring
    const {lastNum, penultimateNum, antePenultimateNum,  result} = fibonacci([0,1],inputValue)
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
      Calculation.innerHTML = `<p>Enter a positive whole number and try again...</p>`
    }
    else if(inputValue >= 2){
      Calculation.innerHTML = calculationDetails; 
    } 
    else{
      Calculation.innerHTML = `<p>F<small>${inputValue}</small> = 1.</p>`
    }
    
  }


  const fibonacci = (result, num) => {
    let a = result[0], b = result[1], f
    for(let i = 2; i <= num; i++) {
      f = a + b; a = b; b = f;
      result.push(f)	
    };
      const lastNum =  result[result.length-1];
      const penultimateNum = result[result.length-2];
      const antePenultimateNum = result[result.length-3];
      return{
        result, lastNum, penultimateNum, antePenultimateNum
      };
  };

  // OR
  //recursion/recursive function is when a function calls itself

  // let fibonacci =  function fib(num) {
  // 	if(num <= 2) {
  // 		return 1
  // 	}
  // 	return fib(num - 2) + fib(num - 1)
  // }
  // console.log(fibonacci(6))