const banner_el = document.getElementById("banner");
const titles = {
	"/": "Welcome to mw-toolkit",
	"/tools": "mw-toolkit tools index",
};
const desc = {};

// ( links, open_in_new_window )
const links = {
	"Home": ["/", false],
	"Tools": ["/tools", false],
	"Source": ["https://github.com/mw-toolkit/mw-toolkit.github.io", true]
};

let tools = null;
window.tools_index = (async () => {
	const res = await fetch("/tools/tools_index.json");

	if (!res.ok) {
		throw new Error(`tools_index.json returned: ${res.status}`);
	}

	tools = await res.json();

	return tools;
})();

async function load() {
	await window.tools_index;

	tools.forEach(tool => {
		titles["/tools/" + tool.id] = tool.title;
		desc["/tools/" + tool.id] = tool.description
	});

	const path = window.location.pathname.replace(/\/$/, "") || "/";
	const title = titles[path];

	const title_el = document.createElement("h1");
	title_el.innerHTML = titles[path];
	banner_el.appendChild(title_el);

	if (title !== titles["/"]) {
		document.getElementsByTagName("title")[0].innerHTML = "mw-toolkit - " + title;
	}

	if (desc[path]) {
		const desc_el = document.createElement("p");
		desc_el.id = "tooldesc";
		desc_el.innerHTML = desc[path];
		banner_el.appendChild(desc_el);
	}

	const links_el = document.createElement("div");
	links_el.id = "links";
	banner_el.appendChild(links_el);

	for (const key in links) {
		const link = links[key];
		const href = link[0];
		const open_in_new_window = link[1];

		const a = document.createElement("a");
		a.href = href;
		a.innerHTML = key;

		if (open_in_new_window) {
			a.target = "_blank";
			a.rel = "noopener noreferrer";
		}

		links_el.appendChild(a);
	}
}

load();
