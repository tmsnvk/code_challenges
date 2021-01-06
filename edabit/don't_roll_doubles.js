// https://edabit.com/challenge/chy94ZtNqzAHMSXoW

function diceGame(arr) {
	let a = 0;
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] !== arr[i][1]) {
			a += arr[i][0] + arr[i][1];
		} else {
			a = 0;
			break;
		}
	}

	return a;
}