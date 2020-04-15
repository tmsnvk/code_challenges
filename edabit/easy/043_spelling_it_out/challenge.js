// https://edabit.com/challenge/Akgh37c6dccEsNBt6

// Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

function spelling(str) {
	let x = [];
	
	for (let i = 1; i <= str.length; i++){
		x.push(str.slice(0, i));
	}
	
	return x;
}
