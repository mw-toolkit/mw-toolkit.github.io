import { downloadCanvas } from "/assets/js/util.js";

var canvas = document.getElementById("output_canvas");
const downloadImg_el = document.getElementById("downloadImg");
const data_el = document.getElementById("data");
const errCorrectionLvl_el = document.getElementById("errCorrectionLevel");

document.getElementById("generate").addEventListener("click", () => {
	var qr = qrcode(0, errCorrectionLvl_el.value);
	qr.addData(data_el.value);
	qr.make();

	var cellSize = document.getElementById("cellSize").valueAsNumber;
	var size = qr.getModuleCount() * cellSize;
	canvas.width = size;
	canvas.height = size;

	qr.renderTo2dContext(canvas.getContext("2d"), cellSize);
	downloadImg_el.hidden = false
});

downloadImg_el.addEventListener("click", () => {
	downloadCanvas(canvas, data_el.value + "_" + errCorrectionLvl_el.value + "_qrcode.png")
});
