// https://edabit.com/challenge/uNzzNQPDQferAAGMc

const reverseImage = (image) => image.map((x) => x.map((y) => (y === 1) ? 0 : 1))