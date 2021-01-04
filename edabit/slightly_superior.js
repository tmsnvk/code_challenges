// https://edabit.com/challenge/xtHTBXjumRg5AhsT5

function isFirstSuperior(arr1, arr2) {
	let x = [];

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] > arr2[i]) {
			x.push("true");
		} else {
			x.push("false");
		}
	}

	if (x.includes("true")) {
		return true;	
	} else {
		return false;
	}
}