// https://edabit.com/challenge/ghbHrRnRiDz9fvQNF

// Profitable Gamble
// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
// A profitable gamble is a game that yields a positive net profit, 
// where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

function profitableGamble(prob, prize, pay) {
	const x = prob * prize - pay;
	
	if (x > 0) {
		return true;
	}
	return false;
}
