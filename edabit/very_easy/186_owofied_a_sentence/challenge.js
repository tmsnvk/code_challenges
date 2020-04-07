// https://edabit.com/challenge/9kCTutboYJmRXotBj

// Owofied a Sentence
// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.
// There's a space in front of owo!

function owofied(sentence) {
	const r1 = /i/g;
	const r2 = /e/g;
	
	const x = sentence.replace(r1, "wi");
	const y = x.replace(r2, "we");
	
	return y + " owo";
}
