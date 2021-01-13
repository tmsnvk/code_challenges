// https://edabit.com/challenge/EMuszDzF66k9J73HG

const jazzify = (arr) => {
	return arr.map((a) => {
		if (a.endsWith("7")) {
			return a;
		} else {
			return `${a}7`;
		}
	})
}