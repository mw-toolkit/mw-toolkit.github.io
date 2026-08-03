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

// Time
export function timeToDecimal(str) {
	const match = str.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
	if (!match) return null;

	let [, hour, minute, period] = match;
	hour = parseInt(hour, 10);
	minute = parseInt(minute, 10);

	if (period) {
		period = period.toUpperCase();

		if (period === 'PM' && hour !== 12) hour += 12;
		if (period === 'AM' && hour === 12) hour = 0;
	}

	return hour + minute / 60;
}

export function timeOffset(local, offset) {
	let raw = local - offset;
	let hour = ((raw % 24) + 24) % 24   // handles negative raw safely
	return {
		hour: hour,
		day_offset: Math.floor(raw / 24)
	};
}

export function zeroPad(n, width = 2) {
    return String(n).padStart(width, '0');
}

export function decimalToTime(n) {
	let hour = Math.floor((n + 24) % 24);
	let minute = Math.round((n - Math.floor(n)) * 60);
	if (minute == 60) {
		minute = 0;
		hour = (hour + 1) % 24;
	}
	let period = hour >= 12 ? "PM" : "AM";

	let displayHour = hour % 12;
	if (displayHour === 0) displayHour = 12;

	return `${zeroPad(displayHour)}:${zeroPad(minute)} ${period}`;
}
