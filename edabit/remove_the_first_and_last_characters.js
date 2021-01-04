// https://edabit.com/challenge/Wq3Q5ewau9Fu2GN9i

const removeFirstLast = str => {
	if (str.length <= 2) return str;
	
	if (str.length > 2) {
		const x = str.split("");
		x.pop();
		x.shift();
		return x.join("");
	}
}
