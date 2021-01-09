// https://edabit.com/challenge/qJGDCEZRoGRPt3viu

function isOrthogonal(arr1, arr2) {
	if (arr1.length == 2) {
		return arr1[0] * arr2[0] + arr1[1] * arr2[1] === 0 ? true : false;
	} else {
		return arr1[0] * arr2[0] + arr1[1] * arr2[1] + arr1[2] * arr2[2] === 0 ? true : false;
	}
}