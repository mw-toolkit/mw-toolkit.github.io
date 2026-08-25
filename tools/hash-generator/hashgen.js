import { toClipboard } from "/assets/js/util.js";

const input_el = document.getElementById("input");
const algo_el = document.getElementById("algorithm");
const hash_el = document.getElementById("hash");
const output_el = document.getElementById("output");

hash_el.addEventListener("click", async () => {
	const data = new TextEncoder().encode(input_el.value);
	const hashBuf = await crypto.subtle.digest(algo_el.value, data);
	const hashArray = Array.from(new Uint8Array(hashBuf));
	output_el.textContent = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
});
