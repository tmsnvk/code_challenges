// https://edabit.com/challenge/RxsaajpPai3CB9G9e

// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class. In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other. In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle. In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.

// https://www.teachpe.com/wp-content/uploads/2019/08/lever620.jpg

// Given an array that contains the fulcrum f, the effort e and the load l, write a function that determines whether or not the array shows a first class lever, second class lever or a third class lever.

// Examples
// determineLever(["e", "f", "l"]) ➞ "first class lever"

// determineLever(["e", "l", "f"]) ➞ "second class lever"

// determineLever(["f", "e", "l"]) ➞ "third class lever"

function determineLever(arr) {
	if (arr[1] === "f") return "first class lever";
	if (arr[2] === "f") return "second class lever";
	if (arr[0] === "f") return "third class lever";
}