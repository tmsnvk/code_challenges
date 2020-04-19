// https://edabit.com/challenge/Dq8kbbsLYyG9are5Z

// Total Volume
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. 
// A box is represented by an array with three elements: length, width and height.
// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 
// 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

const totalVolume = (...boxes) => {
	let x = 0;
	
	for (i = 0; i < boxes.length; i++) {
		x += boxes[i][0] * boxes[i][1] * boxes[i][2];
	}
	return x;
}
