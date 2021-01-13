// https://edabit.com/challenge/djyXcJZAuezrSXJ4j

const missingAngle = (angle1, angle2) => {
	if (angle1 + angle2 > 90) {
		return "acute";
	} else if (angle1 + angle2 < 90) {
		return "obtuse";
	} else {
		return "right";
	}
}
