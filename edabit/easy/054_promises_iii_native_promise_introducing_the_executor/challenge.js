// https://edabit.com/challenge/8kTQqoWYQXRsKuYEf

// Promises III: Native Promise, Introducing the Executor
// Create a simple promise and pass the resolve function a string value of your choice. 
// Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. 
// Store the promise inside a variable named promise.

let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("string")
	}, 1000)
})
