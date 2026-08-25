import showdown from "https://cdn.jsdelivr.net/npm/showdown@2/+esm";

const input_el = document.getElementById("input");
const inputfile_el = document.getElementById("input-file");
let converter = new showdown.Converter();

function render() {
	document.getElementById("content").innerHTML = converter.makeHtml(input.value);
}

input_el.addEventListener("input", render);

function handleFileSelection(event) {
	const file = event.target.files[0];
	const reader = new FileReader();

	reader.onload = function (e) {
		const fileContent = e.target.result; // File content

		input.value = fileContent;
		render();
	};

	reader.onerror = function () {
		console.error("Error reading file");
	};

	reader.readAsText(file);
}


inputfile_el.addEventListener("change", handleFileSelection);
