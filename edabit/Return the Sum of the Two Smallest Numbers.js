// https://edabit.com/challenge/GNgCfKHWfQwByBNqa

const sumTwoSmallestNums = (arr) => {
	let a = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			a.push(arr[i]);
		}
	}

	const b = a.sort((a, b) => a - b);

	return b[0] + b[1];
}