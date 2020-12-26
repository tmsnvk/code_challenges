// https://edabit.com/challenge/9kCTutboYJmRXotBj

function owofied(sentence) {
	const r1 = /i/g;
	const r2 = /e/g;
	
	const x = sentence.replace(r1, "wi");
	const y = x.replace(r2, "we");
	
	return y + " owo";
}
