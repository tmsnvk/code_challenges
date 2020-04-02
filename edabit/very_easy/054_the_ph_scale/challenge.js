// https://edabit.com/challenge/GmAuzN42QXxPNpSmF

// The pH Scale
// Given a pH value, return whether that value is 'alkaline', 'acidic', or 'neutral'. 
// Return 'invalid' if the value given is less than 0 or greater than 14.

function pHName(pH) {
	if (pH < 7 && pH > 0) {
		return "acidic";
	} else if (pH > 7 && pH < 14) {
		return "alkaline";
	} else if (pH === 7) {
		return "neutral";
	} else {
		return "invalid";
	}
}
