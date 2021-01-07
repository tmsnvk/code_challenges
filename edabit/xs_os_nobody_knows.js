// https://edabit.com/challenge/RG5NJWDa7pZGFkhTA

const XO = (str) => {
	let x = 0;
	let o = 0;
	
	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === "o") {
			o += 1;
		} else if (str[i].toLowerCase() === "x") {
			x += 1;
		}
	}
	
	return x === o;
}