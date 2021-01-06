// https://edabit.com/challenge/TzxoYExuxuQw2ahWR

const multiplyNums = (nums) => nums.match(/ /g) ? nums.replace(/,/g, "").split(" ").reduce((x, y) => Number(x) * Number(y)) : Number(nums);