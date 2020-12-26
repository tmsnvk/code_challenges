// https://edabit.com/challenge/rThajiu3LF7qiKpv9

function outlierNumber(arr) {
	let evenNum = [];
	let oddNum = [];
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			evenNum.push(arr[i])
		} else {
			oddNum.push(arr[i]);
		}
	}
	
	return evenNum.length < oddNum.length ? Number(evenNum) : Number(oddNum);
}