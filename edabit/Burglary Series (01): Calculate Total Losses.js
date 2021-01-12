// https://edabit.com/challenge/pLNavsePxJ87t9Nak

function calculateLosses(obj) {
	const a = Object.values(obj);
	let b = 0;

	for (let i = 0; i < a.length; i++) {
		b += a[i];	
	}

	return a.length === 0 ? "Lucky you!" : b;
}