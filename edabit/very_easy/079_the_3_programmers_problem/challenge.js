// https://edabit.com/challenge/BYZW3yNmG99eLpSdR

// The 3 Programmers Problem
// You hired three programmers and you (hopefully) pay them. 
// Create a function that takes three numbers (the hourly wage of each programmer) 
// and returns the difference between the highest-paid programmer and the lowest-paid.

const programmers = (one, two, three) => {
	return Math.max(one, two, three) - Math.min(one, two, three);
};
