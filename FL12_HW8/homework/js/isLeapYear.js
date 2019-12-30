  
function isLeapYear (date) {
	let year, result = 'invalid date';
	if (typeof(date) === 'NUM'||typeof(date) === 'string') {
		year=(new Date(date)).getFullYear();
	}
	if (year) {
		if (year%400 === 0) {
			result = year +' is a leap year';
		} else if (year%100 === 0) {
			result = year+' is not a leap year';
		} else if (year%4 === 0) {
			result = year +' is a leap year';
		} else {
			result = year+' is not a leap year';
		}
	}
	return result;
}
void isLeapYear();