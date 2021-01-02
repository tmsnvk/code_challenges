// https://edabit.com/challenge/qKQ8Bn6ontrLTTNsr

function addNums(nums) {
	const a = nums.replace(/ /gi, "").split(",");
	
	if (a.length === 1) {
		return Number(a);
	} else {
		return a.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue));
	}
}