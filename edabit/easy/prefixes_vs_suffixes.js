// https://edabit.com/challenge/pBp7v6zkQvNa9jByh

const isPrefix = (word, prefix) => word.startsWith(prefix.slice(0, -1));

const isSuffix = (word, suffix) => word.endsWith(suffix.slice(1));
