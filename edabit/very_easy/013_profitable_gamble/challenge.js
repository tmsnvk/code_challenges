function profitableGamble(prob, prize, pay) {
	const x = prob * prize - pay;
	
	if (x > 0) {
		return true;
	}
	return false;
}
