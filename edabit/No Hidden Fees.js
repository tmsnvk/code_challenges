// https://edabit.com/challenge/LSw9Tgs6yMgQ4JfdX

const hasHiddenFee = (prices, t) => prices.map((x) => Number(x.substring(1))).reduce((x, y) => x + y) < Number(t.substring(1));