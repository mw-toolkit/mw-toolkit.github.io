import { luhn, toClipboard } from "/assets/js/util.js"

const input_el = document.getElementById("input");
const generate_el = document.getElementById("generate");
const copy_el = document.getElementById("copy");
let fnumber;

generate_el.addEventListener("click", () => {
	let cleaned = input_el.value.replace(/\D/g, ''); // strips everything except digits

	// Get check digit and reverse
	cleaned = cleaned.split('');

	const num = cleaned.map(n => Number(n));

	const { sum, checkDigit } = luhn(num);
	fnumber = cleaned.join('') + checkDigit;

	document.getElementById("sum").innerHTML = "Sum: " + sum;
	document.getElementById("checkd").innerHTML = "Generated check digit: " + checkDigit;
	document.getElementById("fnumber").innerHTML = "Number with check digit: " + fnumber;
});

copy_el.addEventListener("click", () => {
	toClipboard(fnumber);
});
