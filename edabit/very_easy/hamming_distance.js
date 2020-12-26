// https://edabit.com/challenge/vCtepsfrE7Nts2a9j

const hammingDistance = (str1, str2) => {
	let i = 0;
	let count = 0; 
	
  while (i < str1.length) { 
  	if (str1.charAt(i) != str2.charAt(i)) 
    	count++; 
      i++; 
  }
	
  return count; 
}
