// https://edabit.com/challenge/cRAqXCgyYnjdgktEq

function indexOfCaps(str) {
	let a = [];
	
	str.replace(/[^a-zA-Z]/g, "a").split("").filter((x, index) => x === x.toUpperCase() ? a.push(index) : null)
	
	return a;
}