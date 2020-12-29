// https://edabit.com/challenge/h7LTMAFeNz79rXB2Y

const findLargestNums = arr => {
	const x = [];
	
	for (let i = 0; i < arr.length; i ++) {
		x.push(Math.max(...arr[i]))
	}
	
	return x;
}
