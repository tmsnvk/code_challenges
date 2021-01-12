// https://edabit.com/challenge/cEbhy9eWeNudEuxut

function makeCopy(obj) {
	let newObj = JSON.parse(JSON.stringify(obj));
	return newObj;
}