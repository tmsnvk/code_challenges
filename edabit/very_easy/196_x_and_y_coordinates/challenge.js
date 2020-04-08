// https://edabit.com/challenge/qYAhaD8fTbHWNe9oT

// X and Y Coordinates
// Create a function that converts two arrays of x- and y- coordinates into an array of (x,y) coordinates.

const convertCartesian = (x, y) => x.map((a, b) => [a, y[b]]);
