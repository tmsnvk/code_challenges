// https://edabit.com/challenge/PbEuBFLRpzgWQwuvY

const detectBrowser = userAgent => {
	if (userAgent.includes("Trident")) {
		return "Internet Explorer";
	} else if (userAgent.includes("Firefox")) {
		return "Mozilla Firefox";
	} else if (userAgent.includes("Chrome")) {
		return "Google Chrome";
	} else {
		return "Internet Explorer";
	}
}
