// https://edabit.com/challenge/Szh3ib2bpJCYXKrKa

function emotify(str) {
	const [one, two, three] = str.split(" ");
	
	const obj = {
		"smile": ":D",
		"grin": ":)",
		"sad": ":(",
		"mad": ":P"
	}
	
	return `Make me ${obj[three]}`;
}