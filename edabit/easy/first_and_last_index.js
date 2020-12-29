// https://edabit.com/challenge/AYpxyzbnbS7BGSgvd

const charIndex = (word, char) => {
	if (word.indexOf(char) === -1) { return undefined; }
	
	let x = [];
	
	x.push(word.indexOf(char));
	x.push(word.lastIndexOf(char));
	
	return x;
}
