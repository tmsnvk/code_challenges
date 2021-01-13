// https://edabit.com/challenge/HRPCRRZ9FPYiXnNhH

const emphasise = (str) => {
	let words = "";
	const result = [];

	if (str.length === 0) {
		return "";
	} else {
		words = str.split(" ");
	}
	
	for (let i = 0; i < words.length; i++) {
		result.push(words[i][0].toUpperCase() + words[i].substr(1).toLowerCase());
	}
	
	return result.join(" ");
}