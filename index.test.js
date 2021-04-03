

const fibonacci = require('./index.js')

//import fibonacci from './index.js'

describe(" fibonacci sequence", () => {	
	test('6 term of fibonacci is 8 ', () => {
		const result = [0,1];
		const output = {
			"antePenultimateNum": 3,
			"lastNum": 8, 
			"penultimateNum": 5,
			"result": [0,1,1,2,3,5,8]
		};
		expect(fibonacci(result, 6)).toEqual(output) 
	});

	test('0 term of fibonacci is 0 ', () => {
		const result = [0,1];
		const output = {
			"a": 0,
			"antePenultimateNum": undefined,
			"lastNum": 1, 
			"penultimateNum": 0,
			"result": [0,1]
		};
		expect(fibonacci(result, 0)).toEqual(output) 
	});
})



//const submitValue = require('./index.js')



//tray()