// https://edabit.com/challenge/2dcXsuTD68iRK5MiT

function flipEndChars(str) {
	if (str === "" || Array.isArray(str)) return "Incompatible.";
	if (str.charAt(0) === str.charAt(str.length - 1)) return "Two's a pair.";
	
	const a = str.charAt(0);
	const b = str.charAt(str.length - 1);
	
	return b + str.slice(1, str.length - 1) + a;
}