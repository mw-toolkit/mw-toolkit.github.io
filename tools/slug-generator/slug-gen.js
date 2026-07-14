import { toClipboard } from "/mwutil/assets/js/util.js";

const result = document.getElementById("result");

function generate() {
	// Lowercase
	const input = document.getElementById("input").value.toLowerCase();

	// Strip
	const filtered = input.replace(/[^a-z0-9 \-]/g, '');

	// Rejoin
	let slug = filtered.split(' ').join('-');

	// Clean
	slug = slug.replace(/-+/g, '-').replace(/^-+|-+$/g, '');

	result.innerText = slug;
}

document.getElementById("genbtn").addEventListener("click", generate);
document.getElementById("copy").addEventListener("click", () => {
	toClipboard(result.innerText);
});
