// https://edabit.com/challenge/HzxTqSHLmRC3zEfXb

function neutralise(s1, s2) {
	let a = [];
	
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] === "-" && s2[i] === "-") {
			a.push("-");
		} else if (s1[i] === "+" && s2[i] === "+") {
			a.push("+");
		} else {
			a.push("0");
		}
	}
	
	return a.join("");
}