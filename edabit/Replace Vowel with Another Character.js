// https://edabit.com/challenge/xuRjEej9F9ZG3vg7M

function replaceVowel(word) {
	const obj = {
		a : 1,
		e : 2,
		i : 3,
		o : 4,
		u : 5,
	}

	return word.split("").map((x) => x.replace(/[aeiou]/, `${obj[x]}`)).join("");
}