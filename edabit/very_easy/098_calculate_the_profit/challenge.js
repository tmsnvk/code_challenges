// https://edabit.com/challenge/GJn7xcBiCLdCNXFgy

// Calculate the Profit
// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. 
// You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), 
// and the starting inventory. Return the total profit made, rounded to the nearest dollar. 
// Assume all of the inventory has been sold.

const profit = info => Math.round((info.inventory * info.sellPrice) - info.inventory * info.costPrice);
