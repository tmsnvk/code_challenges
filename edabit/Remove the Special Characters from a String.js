// https://edabit.com/challenge/k7CwrsKPHrEL8h4z6

function removeSpecialCharacters(str) {
	return str.replace(/[^a-zA-Z0-9-_ ]/g, "");
}