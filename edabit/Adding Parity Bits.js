// https://edabit.com/challenge/iBFqQCtMsQBgefBNu

const addParityBit = (b) => b.split("").filter((x) => x === "1").length % 2 === 0 ? `${b}0` : `${b}1`;