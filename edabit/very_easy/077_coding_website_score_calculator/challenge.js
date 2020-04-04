// https://edabit.com/challenge/49xuWj6G4yB6MfvWG

// Coding Website Score Calculator
// Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, 
// where users get points for completing challenges. 
// An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points.
// Create a function that takes in the number of each challenge level a user has played and 
// calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, 
// so the function should return the string "invalid" if any of the passed parameters are negative.

function scoreCalculator(easy, med, hard) {
	const x = 5;
	const y = 10;
	const z = 20;
	
	if (easy < 0 || med < 0 || hard < 0) return "invalid";
	return easy * x + med * y + hard * z;
}
