// https://edabit.com/challenge/o7TwicAHWuMkjbDqQ

const whichIsLarger = (f, g) => {
	if (f() > g()) { return "f"; }
	if (g() > f()) { return "g"; }
	if (f() === g()) {return "neither"; }
}
