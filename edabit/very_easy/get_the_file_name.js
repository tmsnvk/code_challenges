// https://edabit.com/challenge/mN98zKeSSLnXwKz8C

function getFilename(path) {
	const a = path.split("/");
	return a[a.length - 1];
}