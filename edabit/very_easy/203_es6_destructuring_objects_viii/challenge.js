// https://edabit.com/challenge/7GWG3z27pKqJRdPaM

// ES6: Destructuring Objects VIII
// Using basic object destructuring you can assign variables name and email:

// let { name, email } = { name: "John", email: "john@example.com" }
// console.log(name)  // "John"
// console.log(email)  // "john@example.com"

// What if there were more properties but you didn't want to write variables for all them and 
// just wanted to stick them into another object and do something like this:

// let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
// rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true

// There is something you have to do with the variable name rest in order to assign it an object containing the rest of 
// the object properties.
// Use the rest syntax to change the code so that rest = {city: "Phoenix", state: "AZ", address: "USA"}. 
// Only edit the left side of the assignmet { name, email, rest }. Ignore the .toString() function (used for validation).

const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
const str = `({ name, email, ...rest} = user ).toString()`
