// https://edabit.com/challenge/Y2jWYX8FBR9AvNdyi

function ohmsLaw(v, r, i) {
	if ([v, r, i].filter(x => x === "").length !== 1) return "Invalid";
	if (v === "") return +(r * i).toFixed(2);
	if (r === "") return +(v / i).toFixed(2);
	return +(v / r).toFixed(2);
}