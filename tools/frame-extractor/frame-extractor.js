let file = null;

const player = document.getElementById("player");	// Player in this code means a video player
const second_el = document.getElementById("second");
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

document.getElementById("vidupload").addEventListener("change", (e) => {
	file = e.target.files[0];
	if (!file) return;

	player.src = URL.createObjectURL(file);
});

function video_settime() {
	second_el.value = player.currentTime;
}

second_el.addEventListener("input", () => {
	player.currentTime = second_el.value;
});

player.addEventListener("seeked", video_settime);
player.addEventListener("pause", video_settime);

document.getElementById("capture").addEventListener("click", () => {
	canvas.width = player.videoWidth;
	canvas.height = player.videoHeight;
	ctx.drawImage(player, 0, 0);

	canvas.toBlob(blob => {
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${file.name} frame at second${second_el.value}.png`;
		a.click();
	});
});
