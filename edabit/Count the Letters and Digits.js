// https://edabit.com/challenge/2ndkdWJpycphvhmv8

function countAll(str) {
	let a = 0;
	let b = 0;
	
	str.split("").map((x) => x.match(/[a-zA-Z]/) ? a++ : x.match(/[0-9]/) ? b ++ : null);
	
	return { "LETTERS": a, "DIGITS": b };
}