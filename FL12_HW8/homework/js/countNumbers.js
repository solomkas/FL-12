function countNumbers (str) {
	let NUMBER0 = 0, NUMBER1 = 1, result = {};
	str = makeNumber(str);
	for (let i = NUMBER0; i < str.length; i++) {
		result[str[i]] = (result[str[i]] || NUMBER0) + NUMBER1;
	}
	return result;
}
function makeNumber (str) {
	const NUMBER0 = 0, SYMBOL0 = '0', SYMBOL9 = '9';
	let result = '';
	for (let i = NUMBER0; i < str.length; i++) {
		result += str[i] >= SYMBOL0 && str[i] <= SYMBOL9 ? str[i] : '';
	}
	return result;
}
void countNumbers('');