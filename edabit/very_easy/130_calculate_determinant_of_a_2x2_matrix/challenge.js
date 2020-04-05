// https://edabit.com/challenge/MwLp6s75F6S5wRrEJ

// Calculate Determinant of a 2x2 Matrix
// Create a function to calculate the determinant of a 2 x 2 matrix. The determinant of the following matrix is: ad - bc:

// [[a, b], [c, d]]

const calcDeterminant = matrix => matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
