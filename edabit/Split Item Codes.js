// https://edabit.com/challenge/Trog78Qz4bGNLFh6M

function splitCode(item) {
	let nums = [];
	let letters = [];
	
	item.split("").map(char => Number(char) ? nums.push(char) : letters.push(char));
	
	return [letters.join(""),Number(nums.join(""))];
}