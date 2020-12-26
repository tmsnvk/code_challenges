// https://edabit.com/challenge/WBdjg7zgiqi6L5zsL

const isStrangePair = (str1, str2) => {
	if (str1.length == 0 && str2.length == 0) return true;
	if (str1.startsWith(str2[str2.length - 1]) && str1.endsWith(str2[0])) return true;
	return false;
}
