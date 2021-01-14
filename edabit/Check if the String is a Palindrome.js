// https://edabit.com/challenge/2kyS2ESQqPaoZhNSd

function isPalindrome(str) {
	const a = str.replace(/[^0-9a-zA-Z]/g, "");
	
	return a.toLowerCase() === a.split("").reverse().join("").toLowerCase();
}