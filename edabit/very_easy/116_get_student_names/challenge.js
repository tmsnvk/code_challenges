// https://edabit.com/challenge/WikWd2QhrLbuNLYQ5

// Get Student Names
// Create a function that takes an array of students and returns an array of student names.

const getStudentNames = students => {
	const x = [];
	
	for (y of students) {
		x.push(y.name);
	}
	
	return x;
}
