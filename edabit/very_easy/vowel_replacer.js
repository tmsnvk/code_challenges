// https://edabit.com/challenge/5FhabpvT3FF75kgCi

const replaceVowels = (str, ch) => {
	const x = /[aeiou]/gi;
	
	return str.replace(x, ch);
}
