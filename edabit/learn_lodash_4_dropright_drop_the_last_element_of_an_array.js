// https://edabit.com/challenge/LhBwyiMeWiADZhydE

function dropRight(arr, num = 1) {
	for (let i = 0; i < num; i++) {
		arr.pop();
	}
	
	return arr;
}