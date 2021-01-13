// https://edabit.com/challenge/uXf7RQ5am84tup7mQ

function rps(p1, p2) {
	if ((p1 === "Rock" && p2 === "Paper") || (p1 === "Scissors" && p2 === "Rock")) {
		return "The winner is p2";
	} else if ((p1 === "Scissors" && p2 === "Paper") || (p1 === "Paper" && p2 === "Rock")) {
		return "The winner is p1";
	} else {
		return "It's a draw";
	}
}