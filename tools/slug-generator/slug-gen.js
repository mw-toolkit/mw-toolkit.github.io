import { toClipboard } from "/assets/js/util.js";

const result_el = document.getElementById("result");

function generate() {
	// Lowercase
	const input_el = document.getElementById("input").value.toLowerCase();

	// Strip
	const filtered = input_el.replace(/[^a-z0-9 \-]/g, '');

	// Rejoin
	let slug = filtered.split(' ').join('-');

	// Clean
	slug = slug.replace(/-+/g, '-').replace(/^-+|-+$/g, '');

	result_el.innerText = slug;
}

document.getElementById("genbtn").addEventListener("click", generate);
document.getElementById("copy").addEventListener("click", () => {
	toClipboard(result_el.innerText);
});
