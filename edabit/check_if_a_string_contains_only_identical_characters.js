// https://edabit.com/challenge/bnZzPk2QuWr4w5HuZ

const isIdentical = s => {
	const x = (cur) => cur === s[0];
	
	return s.split("").every(x);	
}
