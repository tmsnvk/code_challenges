// https://edabit.com/challenge/PooaCaiDfY2t229bE

function moveToEnd(arr, el) {
	let a = [];
	let b = [];
	
	arr.map((x) => x === el ? b.push(x) : a.push(x));
	
	return a.concat(b);
}