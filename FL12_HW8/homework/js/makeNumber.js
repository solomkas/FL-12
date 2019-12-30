function makeNumber (str) {
	const NUMBER0 = 0, SYMBOL0 = '0', SYMBOL9 = '9';
	let result = '';
	for (let i = NUMBER0; i < str.length; i++) {
		result += str[i] >= SYMBOL0 && str[i] <= SYMBOL9 ? str[i] : '';
	}
	return result;
}
void makeNumber('');