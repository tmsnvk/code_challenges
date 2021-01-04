// https://edabit.com/challenge/mgCKn998CNowjAZBF

function operation(a, b, op) {
	switch (op) {
		case "add":
			return parseInt(a) + parseInt(b);
		case "subtract":
			return parseInt(a) - parseInt(b);
		case "multiply":
			return parseInt(a) * parseInt(b);
		case "divide":
			if (parseInt(b) === 0) {
				return "undefined";
			} else {
				return parseInt(a) / parseInt(b);
			}
	}
}