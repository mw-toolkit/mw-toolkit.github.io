const banner = document.getElementById("banner");
const titles = {
	"/mwutil": "Welcome to mwutil",
	"/mwutil/tools": "mwutil tools index"
};
const desc = {};
const links = {
	"Home": "/mwutil/",
	"Tools": "/mwutil/tools"
};

let tools = null;
window.tools_index = (async () => {
	const res = await fetch("/mwutil/tools/tools_index.json");

	if (!res.ok) {
		throw new Error(`tools_index.json returned: ${res.status}`);
	}

	tools = await res.json();

	return tools;
})();

async function load() {
	await window.tools_index;

	tools.forEach(tool => {
		titles["/mwutil/tools/" + tool.id] = tool.title;
		desc["/mwutil/tools/" + tool.id] = tool.description
	});

	const path = window.location.pathname.replace(/\/$/, "") || "/mwutil/";

	const title_el = document.createElement("h1");
	title_el.innerHTML = titles[path];
	banner.appendChild(title_el);

	if (desc[path]) {
		const desc_el = document.createElement("p");
		desc_el.id = "tooldesc";
		desc_el.innerHTML = desc[path];
		banner.appendChild(desc_el);
	}

	const links_el = document.createElement("div");
	links_el.id = "links";
	banner.appendChild(links_el);

	for (const key in links) {
		const a = document.createElement("a");
		a.href = links[key];
		a.innerHTML = key;
		links_el.appendChild(a);
	}
}

load();
