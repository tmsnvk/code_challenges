// https://edabit.com/challenge/3BqLw3Rp85Y94nAho

function integerBoolean(n) {
	let array = [];
	let numArray = n.split("");

	for (let i = 0; i < numArray.length; i++) {
		if (numArray[i] === "1") {
			array.push(true);
		} else {
			array.push(false);
		}
	}
	
	return array;
}