// https://edabit.com/challenge/ZqxDxzZK6Fm9uW6MF

// Is Sam with Frodo?
// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. 
// If there is a name between them, return false.
// No matter who comes first, the result must be true if Frodo and Sam are side by side.
// There is only one Sam and one Frodo in the array.

function middleEarth(arr) {
	const x = arr.indexOf("Frodo");
	const y = arr.indexOf("Sam");
	
	if (x - y === 1 || y - x === 1) {
		return true;
	} else {
		return false;
	}
}
