import { toClipboard } from "/assets/js/util.js";

const output_el = document.getElementById("output");

document.getElementById("decbtn").addEventListener("click", () => {
	output_el.value = atob(document.getElementById("input").value);
});

document.getElementById("copy").addEventListener("click", () => {
	toClipboard(output_el.value);
});
