// https://edabit.com/challenge/P4zxwFNwZPGeiDwKy

function extendVowels(word, num) {
	if (parseInt(num) !== num || num < 0) {
		return "invalid";
	}
	
	const a = word.split("");
	return a.map((b) => b.match(/[aeiou]|[AEIOU]/g) ? `${b}${b.repeat(num)}` : b).join("");
}