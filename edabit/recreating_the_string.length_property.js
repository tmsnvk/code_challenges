// https://edabit.com/challenge/bvPBzNq9FutDb2X6J

function length(s) {
	let num = 0;
	let array = s.split("");
	
	const b = array.map((el) => num++);
	
	return num;
}