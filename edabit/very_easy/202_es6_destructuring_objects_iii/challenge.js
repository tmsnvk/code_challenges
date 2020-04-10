// https://edabit.com/challenge/pXWouZHLLhW7ggGBo

// ES6: Destructuring Objects III

// const obj =  { two : 2 }
// var { one, two } = obj
// console.log(one) // outputs undefined

// Sometimes an object will be missing properties we are expecting. 
// We can avoid undefined errors by using default values. 
// Use ES6 object destructuring to add a default value of 1 to the one variable. 
// Ignore the .toString() function (used for validation).

const str = `({ one = 1, two } = { two : 2 }).toString()`
