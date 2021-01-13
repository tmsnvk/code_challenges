// https://edabit.com/challenge/nLHMJCfPZgiNBfQ2G

const parallelResistance = (arr) => parseFloat((1 / arr.map((el) => 1 / el).reduce((a,b) => a + b)).toFixed(1));
