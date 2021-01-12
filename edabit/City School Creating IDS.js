// https://edabit.com/challenge/Ht67uJXACq4hWrC2i

function createID(firstname, lastname) {
	return `${firstname.charAt(0).toLowerCase()}${lastname.charAt(0).toUpperCase()}${lastname.charAt(1).toLowerCase()}${lastname.charAt(2).toLowerCase()}`
}