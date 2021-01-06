// https://edabit.com/challenge/CaWc84kuPBzCMEcR3

function spaceWeights(planetA, weight, planetB) {
	const x = {
		Mercury:	3.7,
		Venus:	8.87,
		Earth:	9.81,
		Mars:	3.711,
		Jupiter:	24.79,
		Saturn:	10.44,
		Uranus:	8.69,
		Neptune:	11.15,
	}

	return parseFloat((weight / x[planetA] * x[planetB]).toFixed(2));
}