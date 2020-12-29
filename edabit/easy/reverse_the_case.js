// https://edabit.com/challenge/PTvYKkvf7oytHmJFm

const reverseCase = str => [...str].map(x => x.toLowerCase() == x ? x.toUpperCase() : x.toLowerCase()).join("");
