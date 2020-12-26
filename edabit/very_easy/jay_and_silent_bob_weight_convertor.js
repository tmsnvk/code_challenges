// https://edabit.com/challenge/6DJKnHKELiAnf6tF8

function jayAndBob(str) {
	switch (str) {
		case "half":
			return `${28 * 0.5} grams`;
		case "quarter":
			return `${28 * 0.25} grams`;
		case "eighth":
			return `${(28 * 12.5) / 100} grams`;
		case "sixteenth":
			return `${(28 * 6.25) / 100} grams`;
	}
}