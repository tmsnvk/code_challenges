// https://edabit.com/challenge/9N7zA5oiu6v5nhuBm

function showdown(p1, p2) {
	if (p1.indexOf("B") < p2.indexOf("B")) {
		return "p1";
	} else if (p1.indexOf("B") > p2.indexOf("B")) {
		return "p2";
	} else {
		return "tie";
	}
}
