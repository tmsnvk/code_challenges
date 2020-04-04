// https://edabit.com/challenge/Tbvjwh5GKRbxd3vyD

// Are the Numbers Equal?
// Create a function that takes two integers and checks if they are equal. If there is a string then it should return false.

const isEqual = (num1, num2) => { 
	if (typeof num1 == "string" || typeof num2 == "string") return false;
	
	return num1 == num2;
};
