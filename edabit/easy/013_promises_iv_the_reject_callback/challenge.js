// https://edabit.com/challenge/HT2dHkbzmLDZgsS7G

// Promises IV: The Reject Callback
// Reject the promise with the simple string "It's not a dog!".

let promise = new Promise( (resolve) => {
	let animal = "cat"
  setTimeout(() => {
		if(animal === "dog") {
			resolve("It's a dog!")
		} 
	  if(animal !== "dog") {
			reject("It's not a dog!");
		}
  }, 1000)
})
