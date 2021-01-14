// https://edabit.com/challenge/dfFpj2ZBtdy5J5sen

function validDivision(d) {
	const a = d.split("/").slice(0, 1);
	const b = d.split("/").slice(-1);

	if (Number(b) === 0) return "invalid";
	
	return Number(a) % Number(b) === 0;
}