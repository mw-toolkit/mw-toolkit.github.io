import { toClipboard } from '/assets/js/util.js';

const regexinput_el = document.getElementById("regexinput");
const input_el = document.getElementById("input")
const output_el = document.getElementById("output");
const output_info_el = document.getElementById("output-info");

function handleChanges() {
    output_el.innerHTML = "";
    output_info_el.innerHTML = "";

    if (input.value == "" || regexinput.value == "") { return; }
    const matches = [...input.value.matchAll(regexinput.value)];

    let matchc = 0;
    matches.forEach((m) => {
        matchc += 1;

        const match_el = document.createElement("div");
        match_el.classList.add("match");

        // Index
        const matchi_el = document.createElement("p");
        matchi_el.innerHTML = "Index: " + m.index;
        matchi_el.classList.add("index");
        match_el.appendChild(matchi_el);

        // Match
        const matchv_el = document.createElement("p");
        matchv_el.innerHTML = "Match: " + m[0];
        match_el.appendChild(matchv_el);

        // Copy
        const copy_el = document.createElement("button");
        copy_el.innerHTML = "Copy";
        copy_el.addEventListener("click", () => {
            toClipboard(m[0]);
        });
        match_el.appendChild(copy_el);

        output_el.appendChild(match_el);
    });

    output_info_el.innerHTML = "Matches: " + matchc;
}

regexinput_el.addEventListener("input", handleChanges);
input_el.addEventListener("input", handleChanges);
