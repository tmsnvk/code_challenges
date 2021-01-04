// https://edabit.com/challenge/izss6QT59oH72uky3

function addIndexes(arr) {
	let x = [];
	
	for (let i = 0; i < arr.length; i++) {
		x.push(i + arr[i]);
	}
	
	return x;
}
