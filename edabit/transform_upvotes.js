// https://edabit.com/challenge/niTEsddTdE4gs4YGX

const transformUpvotes = (str) => str.split(" ").map((x) => x.includes("k") ? Number(x.substring(0, x.length - 1)) * 1000 : Number(x));