// https://edabit.com/challenge/kKcEHvyJemCPKkjPZ

function constructFence(price) {
	const a = 1000000 / price.replace(/[^0-9]/g, "");

	return "H".repeat(a);
}