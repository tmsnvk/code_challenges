// https://edabit.com/challenge/Dq8kbbsLYyG9are5Z

const totalVolume = (...boxes) => {
	let x = 0;
	
	for (i = 0; i < boxes.length; i++) {
		x += boxes[i][0] * boxes[i][1] * boxes[i][2];
	}
	return x;
}
