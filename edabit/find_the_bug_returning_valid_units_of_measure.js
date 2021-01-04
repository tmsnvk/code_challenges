// https://edabit.com/challenge/oGYGaavTNoYDjykJY

function hasValidUnitOfMeasure(product = {}) {
	const { unitOfMeasure, comment } = product;
  
	return (Boolean(comment) || unitOfMeasure === 'L' || unitOfMeasure === 'PCE');
}
