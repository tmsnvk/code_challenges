// https://edabit.com/challenge/FEiLd6HgHcwkgHTWP

function factory(num) {
	return (arr) => {
		let a = [];

		for (let i = 0; i < arr.length; i++) {
			a.push(arr[i] / num);
		}

		return a;
	}
}