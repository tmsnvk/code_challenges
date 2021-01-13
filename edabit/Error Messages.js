// https://edabit.com/challenge/eGr8qEJjKwedk9SqY

function error(n) {
	const obj = {
		1: "Check the fan: e1",
		2: "Emergency stop: e2",
		3: "Pump Error: e3",
		4: "c: e4",
		5: "Temperature Sensor Error: e5"
	}
	
	return n <= 5 && n >= 1 ? obj[n] : 101;
}