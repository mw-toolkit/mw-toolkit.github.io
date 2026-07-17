import { luhn, toClipboard } from "/assets/js/util.js"

const input = document.getElementById("input");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
let fnumber;

generate.addEventListener("click", () => {
	let cleaned = input.value.replace(/\D/g, ''); // strips everything except digits

	// Get check digit and reverse
	cleaned = cleaned.split('');

	const num = cleaned.map(n => Number(n));

	const { sum, checkDigit } = luhn(num);
	fnumber = cleaned.join('') + checkDigit;

	document.getElementById("sum").innerHTML = "Sum: " + sum;
	document.getElementById("checkd").innerHTML = "Generated check digit: " + checkDigit;
	document.getElementById("fnumber").innerHTML = "Number with check digit: " + fnumber;
});

copy.addEventListener("click", () => {
	toClipboard(fnumber);
});
