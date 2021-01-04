// https://edabit.com/challenge/PqriC6CkLE5JW57aW

function oddeven(arr) {
	let a = 0;
	let b = 0;

	for (let i = 0; i < arr.length; i++) {
		arr[i] % 2 === 0 ? a++ : b++;
	}
	
	return b > a ? true : false;
}