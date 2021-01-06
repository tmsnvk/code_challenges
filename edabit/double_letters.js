// https://edabit.com/challenge/YHLaB8itA9tEDN5TG

function doubleLetters(word) {
	let a = word.split("");

	for (let i = 0; i < a.length; i++) {
		if (a[i] === a[i + 1]) return true;
	}
	
	return false;
}