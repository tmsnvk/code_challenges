// https://edabit.com/challenge/QW5CApff3WAGszrWY

const tempConversion = (celsius) => celsius > -273.15 ? [parseFloat((celsius * 9 / 5 + 32).toFixed(2)), parseFloat((celsius + 273.15).toFixed(2))] : "Invalid";
