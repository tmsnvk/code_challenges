// https://edabit.com/challenge/WrXmsGDGxqkjNCZtw

const capLast = (txt) => txt.split(" ").map((x) => x.substring(0, x.length - 1) + x.charAt(x.length - 1).toUpperCase()).join(" ")