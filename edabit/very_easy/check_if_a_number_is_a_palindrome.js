// https://edabit.com/challenge/6dbpFcrW4schC6zDP

const isPalindrome = n => {
	const x = n.toString();
	const y = x.split("").reverse().join("");
	
	return x === y;
}
