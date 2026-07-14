const toolsl = document.getElementById("tools");

async function show_tools(s) {
	toolsl.innerHTML = "";

	if (!tools) {
		try {
			tools = await await window.tools_index;
		} catch (error) {
			console.log(error.message);
		}
	}

	const q = s.toLowerCase();
	const filtered = tools.filter(tool =>
		tool.id.toLowerCase().includes(q) ||
		tool.title.toLowerCase().includes(q) ||
		tool.description.toLowerCase().includes(q)
	);

	filtered.forEach(tool => {
		var entry = document.createElement("li");
		var link = document.createElement("a");
		link.href = "/mwutil/tools/" + tool.id;
		link.innerHTML = `${tool.title} (${tool.id}) - ${tool.description}`;
		entry.appendChild(link);
		toolsl.appendChild(entry);
	});
}

show_tools("");

document.getElementById("searchq").addEventListener("input", () => {
	show_tools(document.getElementById("searchq").value);
});