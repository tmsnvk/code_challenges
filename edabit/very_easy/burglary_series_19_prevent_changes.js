// https://edabit.com/challenge/eQs2yCBnzRZ3dnRKd

const obj = { noChanges: true }

function preventChanges(obj) {
	Object.freeze(obj);
	
  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
}