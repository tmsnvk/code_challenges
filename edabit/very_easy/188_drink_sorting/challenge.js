// https://edabit.com/challenge/nuXdWHAoHv9y38sn7

// Drink Sorting
// You will be given an array of drinks, with each drink being an object with two properties: name and price. 
// Create a function that has the drinks array as an argument and return the drinks object sorted by price in ascending order.

const sortDrinkByPrice = drinks => drinks.sort((x, y) => (x.price > y.price) ? 1 : -1)
