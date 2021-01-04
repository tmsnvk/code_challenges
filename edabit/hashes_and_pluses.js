// https://edabit.com/challenge/ydBcGvv3n447nbxCy

const hashPlusCount = str => {
	let y = 0;
	let z = 0;
	
	const x = str.split("");
	
	for (let a of x) {
		if (a === "#") {
			y += 1;
		} else {
			z += 1;
		}
	}
	
	return [y, z];
}
