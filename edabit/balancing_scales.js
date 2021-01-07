// https://edabit.com/challenge/g3tBCBvw8Q7phdrPP

function scaleTip(arr) {
	const a = arr.slice(0, Math.floor(arr.length / 2)).reduce((x, y) => x + y);
	const b = arr.slice(- Math.floor(arr.length / 2)).reduce((x, y) => x + y);

	return a === b ? "balanced" : a > b ? "left" : "right";
}