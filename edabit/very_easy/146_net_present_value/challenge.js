// https://edabit.com/challenge/TW9ifW7sYgoQBQbDf

// Net Present Value
// Create a function that takes a Present Value of Cash pv, an Investment Rate ir and the Number of Years years to be Invested 
// and returns the Net Present Value.
// In the world of finance, the time value of money must be taken into account. 
// In simple terms, this is because $100 now would buy more than $100 a year from now. 
// Therefore, if we receive $100 in one years time, it will not be worth as much to us today.

// Assuming we received the Present Value of Cash at the end of each year over a period of time, 
// this can be calculated by multipying the Present Value of Cash by the cumulative present value interest rate.

// The cumulative present value interest rate can be calculated by:

// pv * (1 - (1 + investment rate) ^negative number of years) / investment rate

// The result should always be rounded to the nearest whole dollar.

// It is not possible to receive a negative amount of money, use a negative investment rate or invest for a negative number of years. 
// These should return false.

function netPresentValue(pv, ir, years) {
	let present = Math.round((pv * (1 - Math.pow((1 + ir), -years))) / ir);
	if (present < 0) return false;
	 
  return `$${present}`;
}
