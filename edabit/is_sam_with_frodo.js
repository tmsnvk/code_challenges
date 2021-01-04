// https://edabit.com/challenge/ZqxDxzZK6Fm9uW6MF

function middleEarth(arr) {
	const x = arr.indexOf("Frodo");
	const y = arr.indexOf("Sam");
	
	if (x - y === 1 || y - x === 1) {
		return true;
	} else {
		return false;
	}
}
