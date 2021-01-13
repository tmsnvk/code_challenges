// https://edabit.com/challenge/5sdtyMNdLw2FK4fHp

const inclusiveArray = (startNum, endNum) => {
	if (startNum > endNum) return [startNum];
	
	let a = [];
	
	for (let i = startNum; i <= endNum; i++) {
		a.push(i);
	}
	
	return a;
}