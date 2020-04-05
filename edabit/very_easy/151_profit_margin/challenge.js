// https://edabit.com/challenge/uqTGMSityHMYL7W5s

// Profit Margin
// Create a function that calculates the profit margin given costPrice and salesPrice. 
// Return the result as a percentage formated string, and rounded to one decimals. 
// To calculate profit margin you subtract the cost from the sales price, then divide by salesprice.

function profitMargin(costPrice, salesPrice) {
	const x = ((salesPrice - costPrice) / salesPrice) * 100;
	const y = x.toFixed(1);
  
	return `${y.toString()}%`;
}
