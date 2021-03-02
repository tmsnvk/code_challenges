// https://edabit.com/challenge/AhFCvDdQeA7TnKSqe

function forbiddenLetter(char, arr) {
	return !arr.join(",").split("").includes(char)
}