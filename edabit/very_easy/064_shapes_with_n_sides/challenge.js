// https://edabit.com/challenge/wpHyrxbSaYxLeXT6L

// Shapes With N Sides
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. 
// Here are the expected outputs to get from these inputs.

// Inputs	  Outputs
// 1	      "circle"
// 2	      "semi-circle"
// 3	      "triangle"
// 4	      "square"
// 5	      "pentagon"
// 6	      "hexagon"
// 7	      "heptagon"
// 8	      "octagon"
// 9	      "nonagon"
// 10	      "decagon"

function nSidedShape(n) {
	const x = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
	
	return x[n - 1];
}
