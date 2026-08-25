import { toClipboard } from "/assets/js/util.js";

const output_el = document.getElementById("output");

document.getElementById("encbtn").addEventListener("click", () => {
	output_el.value = btoa(document.getElementById("input").value);
});

document.getElementById("copy").addEventListener("click", () => {
	toClipboard(output_el.value);
});
