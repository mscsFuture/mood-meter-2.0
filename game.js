
window.onload = function() {
	console.log("Entering window.onload()...");
	gameInit();
	console.log("...Exiting window.onload()");
}

var version = 0; //0 is mood, 1 is mood jr.

function gameInit() {
	console.log("Entering gameInit...");

	if (version == 0) {
		buildMoodMaxiGrid();
	}
	else if (version == 1){
		buildMoodMiniGrid();
	}
	else {
		console.log("error getting version info");
	}
	console.log("...Exiting gameInit)");
}


function buildMoodMiniGrid() {
	console.log("Entering buildMoodJrGrid()...");
	const gridContainer = document.getElementById('gridContainer');
	const numRows = MOODMININUMROWS;
	const numCols = MOODMININUMCOLS;

	gridContainer.style.setProperty('--grid-rows', MOODMININUMROWS);
	gridContainer.style.setProperty('--grid-cols', MOODMININUMCOLS);
	for (c = 0; c < MOODMININUMROWS * MOODMININUMCOLS; c++) {
		let cell = document.createElement("div");
		cell.classList.add("mini-grid-cell", moodMiniEnergyPleasantnessMappings[c]);

		let cellText = document.createElement("div");
		cellText.classList.add("mini-grid-cell-text");
		cellText.innerText = moodMiniEnglishEmotionMappings[c];

		let cellImage = document.createElement("div");
		cellImage.classList.add("mini-grid-cell-image");
		cellImage.style.backgroundImage = "url(assets/emoticons/" + moodMiniImageMappings[c] + ")";
		// console.log("No Image");
		
		cell.appendChild(cellText);
		cell.appendChild(cellImage);
		gridContainer.appendChild(cell);
	}

	console.log("...Exiting buildMoodJrGrid()");
}

function buildMoodMaxiGrid() {
	console.log("Entering buildMoodJrGrid()...");
	const gridContainer = document.getElementById('gridContainer');
	const numRows = MOODMAXINUMROWS;
	const numCols = MOODMAXINUMCOLS;

	gridContainer.style.setProperty('--grid-rows', numRows);
	gridContainer.style.setProperty('--grid-cols', numCols);
	for (c = 0; c < numRows * numCols; c++) {
		let cell = document.createElement("div");
		cell.classList.add("maxi-grid-cell", moodMaxiEnergyPleasantnessMappings[c]);

		let cellText = document.createElement("div");
		cellText.classList.add("maxi-grid-cell-text");
		cellText.innerText = moodMaxiEnglishEmotionMappings[c];
		
		cell.appendChild(cellText);
		gridContainer.appendChild(cell);
	}

	console.log("...Exiting buildMoodJrGrid()");
}