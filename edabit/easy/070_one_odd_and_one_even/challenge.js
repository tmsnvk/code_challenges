// https://edabit.com/challenge/d3ZmD3EiNdECFyyPR

// One Odd and One Even
// Given a two digit number, return true if that number contains one even and one odd digit.

const oneOddOneEven = n => {
	if (n.toString()[0] % 2 === 0 && n.toString()[1] % 2 !== 0) {
		return true;
	} else if (n.toString()[0] % 2 !== 0 && n.toString()[1] % 2 === 0) {
		return true;
	} else {
		return false;
	}
}
