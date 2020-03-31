function profitableGamble(prob, prize, pay) {
	const x = prob * prize - 1;
	
	if (x > 0) {
		return true;
	}
	return false;
}
