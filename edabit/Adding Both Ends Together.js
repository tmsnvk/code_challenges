// https://edabit.com/challenge/ki2njto7agJD3EdZ6

function endsAddTo10(nums) {
	nums = nums.map((ele) => Math.abs(ele));
	
	nums = nums.map((ele) => {
    first = Number(ele.toString()[0]);
    last = Number(ele.toString()[ele.toString().length - 1]);
    sum = first + last;
    return sum;
  });
	
  return nums.filter((ele) => ele === 10).length;
}