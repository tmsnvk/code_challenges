// https://edabit.com/challenge/qq2HY8vM6Gz478qD2

function whoWinsTonight(coins, space, price, size) {
	const a = Math.floor(coins / price);
	const b = Math.floor(space / size);
	let winner;
	
	if (a > b) {
		winner = "Bill";
	} else if (b > a) {
		winner = "Will";
	} else {
		winner = "Tie";
	}
	
	return winner;
}