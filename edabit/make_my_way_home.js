// https://edabit.com/challenge/ywBPgGhgeLHibEG7H

function distanceHome(arr) {
	let sum = 0;
	
	for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
	}
	
	return Math.abs(sum);
}