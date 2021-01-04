// https://edabit.com/challenge/49xuWj6G4yB6MfvWG

function scoreCalculator(easy, med, hard) {
	const x = 5;
	const y = 10;
	const z = 20;
	
	if (easy < 0 || med < 0 || hard < 0) return "invalid";
	return easy * x + med * y + hard * z;
}
