// https://edabit.com/challenge/9N7zA5oiu6v5nhuBm

// Western Showdown
// Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than 
// his opponent in a gun standoff.
// Given two strings, p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".
// Both strings are the same length.

function showdown(p1, p2) {
	if (p1.indexOf("B") < p2.indexOf("B")) {
		return "p1";
	} else if (p1.indexOf("B") > p2.indexOf("B")) {
		return "p2";
	} else {
		return "tie";
	}
}
