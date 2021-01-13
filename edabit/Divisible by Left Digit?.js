// https://edabit.com/challenge/ZRvwAuxcA8SFsPoBP

function divisibleByLeft(n) {
  const a = String(n).split("");

	return a.map((x, index) => Number(x) % a[index - 1] === 0);
}