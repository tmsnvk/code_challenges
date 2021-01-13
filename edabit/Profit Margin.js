// https://edabit.com/challenge/uqTGMSityHMYL7W5s

function profitMargin(costPrice, salesPrice) {
	const x = ((salesPrice - costPrice) / salesPrice) * 100;
	const y = x.toFixed(1);
  
	return `${y.toString()}%`;
}
