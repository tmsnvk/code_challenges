// https://edabit.com/challenge/9fhT4EBbBR4BvJLwB

function totalDistance(height, length, tower) {
	return Math.round(((tower / height) * length + tower) * 10) / 10;
}