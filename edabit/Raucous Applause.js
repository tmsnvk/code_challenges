// https://edabit.com/challenge/3kgpXM2wcSvDR6z4K

function countClaps(str) {
	const x = str.split("").join();
	const y = x.replace( /[^A-Z]/g, '' );
	const z = y.length;
	
	return z;
}
