// https://edabit.com/challenge/fzF6JqF7JjtJok9jY

function largestNumbers(n, arr) {
  const a = arr.sort((x, y) => x - y);

	return a.slice(a.length - n);
}