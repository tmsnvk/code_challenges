// https://edabit.com/challenge/WBdjg7zgiqi6L5zsL

// Strange Pair
// A pair of strings form a strange pair if both of the following are true:

// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.

// Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.
// It should work on a pair of empty strings (they trivially share nothing).

const isStrangePair = (str1, str2) => {
	if (str1.length == 0 && str2.length == 0) return true;
	if (str1.startsWith(str2[str2.length - 1]) && str1.endsWith(str2[0])) return true;
	return false;
}
