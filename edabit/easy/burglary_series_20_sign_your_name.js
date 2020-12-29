// https://edabit.com/challenge/xRcgQHtfLbxomYb33

function signYourName(obj) {
	Object.seal(obj);

  obj.yourSignature = "Whatever";
	obj.spouseSignature = "Nice Try"
  return obj;
}