// https://edabit.com/challenge/CFswwYtpKgSvMuYcS

function challenge1(s) {
	return s.slice(0, 5);
}

function challenge2(s) {
	return s.slice(s.length - 5);
}
	
function challenge3(s) {
	return s.split("").reverse().join("");
}
	
function challenge4(s) {
	return s.slice(0, 6).split("").reverse().join("");
}
	
function challenge5(s) {
	return s.slice(s.length - 7).split("").filter((x, index) => index % 2 === 0).join("");
}