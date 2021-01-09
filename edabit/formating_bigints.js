// https://edabit.com/challenge/cXgmHb6aXESZBvW4b

function formatBigInt(bigNumber, decimals) {
	const a = String(bigNumber).split().pop().length - decimals;
	
	return String(bigNumber).split().pop().slice(0, a) + "." + String(bigNumber).split().pop().slice(a);
}