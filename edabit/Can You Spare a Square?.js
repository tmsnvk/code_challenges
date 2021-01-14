// https://edabit.com/challenge/xhrEw5w9N45TfsgiY

function tpChecker(home) {
	const a = home.people * 57;
	const b = home.tp * 500;
	
	return Math.floor(b / a) < 14 ? `Your TP will only last ${Math.floor(b / a)} days, buy more!` : `Your TP will last ${Math.floor(b / a)} days, no need to panic!`;
}