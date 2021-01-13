// https://edabit.com/challenge/TW9ifW7sYgoQBQbDf

function netPresentValue(pv, ir, years) {
	let present = Math.round((pv * (1 - Math.pow((1 + ir), -years))) / ir);
	if (present < 0) return false;
	 
  return `$${present}`;
}
