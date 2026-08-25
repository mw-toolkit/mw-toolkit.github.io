import { toClipboard } from "/assets/js/util.js";

const TOPICS_CHUNK_COUNT = 2;		// Increment only when adding chunk!

const output_el = document.getElementById("output");
const genbtn_el = document.getElementById("generate");
const openwiki_el = document.getElementById("openwiki");

genbtn.addEventListener("click", () => {
	genbtn_el.disabled = true;
	openwiki_el.hidden = false;

	let random = Math.floor(Math.random() * TOPICS_CHUNK_COUNT + 1);

	try {
		fetch(`/tools/random-topic-generator/topics/topics-chunk-${random}.json`)
			.then(response => response.json())
			.then(topics => {
				let i = Math.floor(Math.random() * (topics.length - 1));
				output.innerHTML = topics[i];
				openwiki_el.href = `https://wikipedia.org/wiki/${encodeURIComponent(topics[i])}`;
			});
	} catch (e) {
		throw new Error(e);
	}

	genbtn_el.disabled = false;
});

document.getElementById("copy").addEventListener("click", () => {
	toClipboard(output_el.innerHTML);
});
