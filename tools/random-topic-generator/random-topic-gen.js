import { toClipboard } from "/assets/js/util.js";

const TOPICS_CHUNK_COUNT = 2;		// Increment only when adding chunk!

const output = document.getElementById("output");
const genbtn = document.getElementById("generate");
const openwiki = document.getElementById("openwiki");

genbtn.addEventListener("click", () => {
	genbtn.disabled = true;
	openwiki.hidden = false;

	let random = Math.floor(Math.random() * TOPICS_CHUNK_COUNT + 1);

	try {
		fetch(`/tools/random-topic-generator/topics/topics-chunk-${random}.json`)
			.then(response => response.json())
			.then(topics => {
				let i = Math.floor(Math.random() * (topics.length - 1));
				output.innerHTML = topics[i];
				openwiki.href = `https://wikipedia.org/wiki/${encodeURIComponent(topics[i])}`;
			});
	} catch (e) {
		throw new Error(e);
	}

	genbtn.disabled = false;
});

document.getElementById("copy").addEventListener("click", () => {
	toClipboard(output.innerHTML);
});
