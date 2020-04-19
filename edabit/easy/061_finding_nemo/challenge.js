// https://edabit.com/challenge/c23dFfNiKbnguSQtq

// Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: 
// "I found Nemo at [the order of the word you find nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".
// Nemo will always look like Nemo, and not NeMo or other capital variations.
// Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
// If there are multiple Nemo's in the sentence, only return for the first one.

const findNemo = sentence => {
	const y = "Nemo";
	const x = sentence.split(" ").indexOf(y);
	
	if (x >= 0) {
		return `I found Nemo at ${x + 1}!`;	
	} else {
		return "I can't find Nemo :("
	}
}
