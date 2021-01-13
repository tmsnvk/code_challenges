// https://edabit.com/challenge/2FBEMqxiZ2z9efgQB

function firstNVowels(s, n) {
	let x = [];
	const a = s.split("").filter((x) => x.match(/[aeiou]/gi));

	for (let i = 0; i < n; i++) {
		x.push(a[i]);
	}

	if (x.includes(undefined)) return "invalid";
	return x.join("");
}