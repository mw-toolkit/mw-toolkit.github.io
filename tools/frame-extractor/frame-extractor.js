let file = null;

const player_el = document.getElementById("player");	// Player in this code means a video player
const second_el = document.getElementById("second");
const canvas_el = document.getElementById("canvas");

const ctx = canvas_el.getContext("2d");

document.getElementById("vidupload").addEventListener("change", (e) => {
	file = e.target.files[0];
	if (!file) return;

	player_el.src = URL.createObjectURL(file);
});

function video_settime() {
	second_el.value = player_el.currentTime;
}

second_el.addEventListener("input", () => {
	player_el.currentTime = second_el.value;
});

player_el.addEventListener("seeked", video_settime);
player_el.addEventListener("pause", video_settime);

document.getElementById("capture").addEventListener("click", () => {
	canvas_el.width = player_el.videoWidth;
	canvas_el.height = player_el.videoHeight;
	ctx.drawImage(player_el, 0, 0);

	canvas_el.toBlob(blob => {
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${file.name} frame at second${second_el.value}.png`;
		a.click();
	});
});
