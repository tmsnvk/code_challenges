// https://edabit.com/challenge/nQx5XHtWurbGrFJww

const hasValidPrice = (product) => product ? (typeof product.price === "number" && product.price >= 0) : false;