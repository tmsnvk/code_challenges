// https://edabit.com/challenge/KffCqRz23XL5ewbgH

const specialReverse = (s, c) => s.split(" ").map((x) => x[0] === c ? x.split("").reverse().join("") : x).join(" ");