// https://edabit.com/challenge/FPamWj3Ky7ep9ApBz

function isAnagram(s1, s2) {
	if (s1.length !== s2.length) return false;
	
	const a = s1.toLowerCase().split("").sort().join("");
	const b = s2.toLowerCase().split("").sort().join("");
	
	return a === b;
}