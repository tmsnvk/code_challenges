// https://edabit.com/challenge/QtEsWc3qmxWReBNmK

function formatMath(expr) {
  const arr = expr.split(" ");
  const sign = arr[1];
  let total = 0;
	
  switch (sign) {
    case '+': 
			total = parseFloat(arr[0]) + parseFloat(arr[2]);
			break;
    case '-': 
			total = parseFloat(arr[0]) - parseFloat(arr[2]);
			break;
    case 'x': 
			total = parseFloat(arr[0]) * parseFloat(arr[2]);
			break;
    case '/': 
			total = parseFloat(arr[0]) / parseFloat(arr[2]);
			break;
  }

return `${expr} = ${total}`;
}