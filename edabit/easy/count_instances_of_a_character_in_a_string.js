// https://edabit.com/challenge/kbFhwaDyrd79JrgeB

const charCount = (myChar, str) => {
	const y = str.split("");
	const z = y.filter(x => x === myChar);
	return z.length;
}
