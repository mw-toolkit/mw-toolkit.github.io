import { toClipboard } from '/assets/js/util.js';

const regexinput = document.getElementById("regexinput");
const input = document.getElementById("input")
const output = document.getElementById("output");
const output_info = document.getElementById("output-info");

function handleChanges() {
    output.innerHTML = "";
    output_info.innerHTML = "";

    if (input.value == "" || regexinput.value == "") { return; }
    const matches = [...input.value.matchAll(regexinput.value)];

    let matchc = 0;
    matches.forEach((m) => {
        matchc += 1;

        const match = document.createElement("div");
        match.classList.add("match");

        // Index
        const matchi = document.createElement("p");
        matchi.innerHTML = "Index: " + m.index;
        matchi.classList.add("index");
        match.appendChild(matchi);

        // Match
        const matchv = document.createElement("p");
        matchv.innerHTML = "Match: " + m[0];
        match.appendChild(matchv);

        // Copy
        const copy = document.createElement("button");
        copy.innerHTML = "Copy";
        copy.addEventListener("click", () => {
            toClipboard(m[0]);
        });
        match.appendChild(copy);

        output.appendChild(match);
    });

    output_info.innerHTML = "Matches: " + matchc;
}

regexinput.addEventListener("input", handleChanges);
input.addEventListener("input", handleChanges);
