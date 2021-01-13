// https://edabit.com/challenge/94rJjLxQbRhoypdCa

function firstPlace(road) {
	if (road === "") {
		return "No road available";
	}
	
	const a = road.split("=");
	const b = a.join("");

	if (b === "") {
		return "No car available";
	}
	
	return b.charAt(b.length - 1);
}