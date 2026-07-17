export function toClipboard(s) {
	navigator.clipboard.writeText(s).then(() => {
	}).catch(err => {
		return err;
	});
}

export function arrayIntersection(a, b) {
	return a.filter((v) => b.includes(v));
}

// Luhn algorithm
export function luhn(num) {
	let sum = 0;
	for (const [i, v] of num.reverse().entries()) {
		let n = v;
		if (i % 2 == 0) {
			n *= 2;
			if (n > 9) {
				n -= 9;
			}
		}
		sum += n;
	}

	return {
		sum: sum,
		checkDigit: (10 - (sum % 10))
	};
}

// Base conversion
const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";

export function toBase(n, base) {
	if (base < 2 || base > DIGITS.length) {
		throw new Error(`Base must be between 2 and ${DIGITS.length}`);
	}
	if (n === 0) return "0";
	let result = "";
	let num = n;
	while (num > 0) {
		result = DIGITS[num % base] + result;
		num = Math.floor(num / base);
	}
	return result;
}

export function fromBase(str, base) {
	if (base < 2 || base > DIGITS.length) {
		throw new Error(`Base must be between 2 and ${DIGITS.length}`);
	}
	let result = 0;
	for (const char of str) {
		const value = DIGITS.indexOf(char);
		if (value === -1 || value >= base) {
			throw new Error(`Invalid character "${char}" for base ${base}`);
		}
		result = result * base + value;
	}
	return result;
}

export function convertBase(str, fromBaseNum, toBaseNum) {
	return toBase(fromBase(str, fromBaseNum), toBaseNum);
}
