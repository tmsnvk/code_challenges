// https://edabit.com/challenge/eYqGBvdszDAnNmf4J

// The challenge is to fix all of the bugs in this incredibly messy code, which the code in the image might've actually looked like (probably not)! The code given will output the same middle two lines as in the image shown above.

// First parameter is the user's score.
// Second parameter is the required score.
// Examples
// gradePercentage("85%", "85%") ➞ "You PASSED the Exam"

// gradePercentage("99%", "85%") ➞ "You PASSED the Exam"

// gradePercentage("65%", "90%") ➞ "You FAILED the Exam"

const gradePercentage = (userScore, passScore) => {
	let s = 'You ';
	userScore = parseInt(userScore.substring(0, userScore.length - 1));
	passScore = parseInt(passScore.substring(0, passScore.length - 1));
	if (userScore < passScore)
		s = s + 'FAILED';
	if (userScore >= passScore)
		s = s + 'PASSED';
	return s + ' ' + 'the Exam';
}