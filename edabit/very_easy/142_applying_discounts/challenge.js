// https://edabit.com/challenge/qgS7XZjvL8wEChNvq

// Applying Discounts
// Create a function that applies a discount d to every number in the array.

const getDiscounts = (nums, d) => nums.map(x => x * parseFloat(d) / 100.0);
