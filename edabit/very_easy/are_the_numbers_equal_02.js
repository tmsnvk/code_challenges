// https://edabit.com/challenge/Tbvjwh5GKRbxd3vyD

const isEqual = (num1, num2) => { 
	if (typeof num1 == "string" || typeof num2 == "string") return false;
	
	return num1 == num2;
};
