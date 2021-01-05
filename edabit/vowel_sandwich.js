// https://edabit.com/challenge/cSymahmP7vfHSm2jF

function isVowelSandwich(str) {
	if (str.length !== 3) {
		return false;
	} else if (str.charAt(1).match(/[aeiou]/g) && !str.charAt(0).match(/[aeiou]/g) && !str.charAt(2).match(/^[aeiou]/g)) {
		return true;
	} else {
		return false;
	}
}