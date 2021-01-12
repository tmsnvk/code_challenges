// https://edabit.com/challenge/XnZAcvr4tCD9ppyrN

const boomIntensity = (n) => {
	if (n < 2) return "boom";
	if (n % 2 === 0 && n % 5 === 0) return `B${"O".repeat(n)}M!`;
	if (n % 2 === 0) return `B${"o".repeat(n)}m!`;
	if (n % 5 === 0) return `B${"O".repeat(n)}M`;
	if (n > 2) return `B${"o".repeat(n)}m`;
}