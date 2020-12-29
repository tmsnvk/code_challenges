// https://edabit.com/challenge/c23dFfNiKbnguSQtq

const findNemo = sentence => {
	const y = "Nemo";
	const x = sentence.split(" ").indexOf(y);
	
	if (x >= 0) {
		return `I found Nemo at ${x + 1}!`;	
	} else {
		return "I can't find Nemo :("
	}
}
