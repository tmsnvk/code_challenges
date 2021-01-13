// https://edabit.com/challenge/FvXHdrhjLaof47Qt3

function arrBetween(num1, num2, arr) {
	let array = [];
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > num1 && arr[i] < num2) {
			array.push(arr[i]);
		}
	}
	
	return array;
}