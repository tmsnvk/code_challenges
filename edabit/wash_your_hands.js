// https://edabit.com/challenge/XNqAFTw3shrxcEdWz

const washHands = (N, nM) => {
	const a = nM * 30 * N * 21;
	const x = Math.floor(a / 60);
	const y = a - x * 60;
	
	return `${x} minutes and ${y} seconds`;
}