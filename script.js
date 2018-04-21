/* write your script here */ 
var searchBar = document.getElementById("search-bar")
var searchButton = document.getElementById("search-button")
var autoSuggestions = document.getElementById("auto-suggestions")
var display = document.getElementById("display")

searchBar.addEventListener("keypress", checkKey);
searchButton.addEventListener("click", processInput);

var makeupDatabase = [
{
	name: "Love Light Prismatic Highlighter",
	type: "highlighter",
	makeupLine: "TOO FACED",
	price: 30.00,
	stars: 3.5,
	image: "Love-Light-Prismatic-Highlighter.png"
},
{
	name: "Radiant Creamy Concealer",
	type: "concealer",
	makeupLine: "NARS",
	price: 30.00,
	stars: 4.5,
	image: "radiant-creamy-concealer.png"
},
{
	name: "Naked Skin One & Done Blur on the Run Touch-Up & Finishing Balm",
	type: "setting powder",
	makeupLine: "URBAN DECAY",
	price: 30.00,
	stars: 3.5,
	image: "finishing-balm.png"
},
{
	name: "Lock-It Foundation",
	type: "foundation",
	makeupLine: "KAT VON D",
	price: 35.00,
	stars: 4,
	image: "Lock-It-Foundation.png"
},
{
	name: "Soft Glam Eyeshadow Palette",
	type: "eye pallete",
	makeupLine: "ANASTASIA BEVERLY HILLS",
	price: 42,
	stars: 5,
	image: "Soft-Glam-Eyeshadow-Palette.png"
}
]

function checkKey(e){
	var key = e.which || e.keyCode;
	if(key == 13) {
    	console.log(“You pressed enter!”);
  	}
}

function processInput(e){
	var cleanedInput = searchBar.value.toLowerCase().trim()
	autoSuggestions.innerHTML = ""
	autoSuggestions.style.display = "none"
	searchBar = ""
	var databaseRecord = getRecord(cleanedInput)
	if(databaseRecord != null){
		displayRecord(databaseRecord)

	}else{
		alert(“No results.”)
	}


}

function getRecord(cleanedInput){
	for(var i = 0; i<makeupDatabase; i ++){
		var cleanedRecordName = database[i].name.toLowerCase().trim()
	}
	if(cleanedInput=cleanedRecordName){
		return  databaseRecord
	}
	return null
}

function displayRecord(databaseRecord){
	var recordName = document.createElement("h2");
	recordName.innerHTML = databaseRecord.name;
	var recordImage = document.createElement("img");
	recordImage.src = databaseRecord.image;
	var recordType = document.createElement("p");
	recordType.innerHTML = databaseRecord.type;
	var recordMakeupLine = document.createElement("p");
	recordMakeupLine.innerHTML = databaseRecord.makeupLine;
	var recordPrice = document.createElement("p");
	recordPrice.innerHTML = "<b>Price: $</b> " + databaseRecord.price;
	var recordStars = document.createElement("p");
	recordStars.innerHTML = "<b>Rating:</b> " + databaseRecord.stars;

	display.appendChild(recordName);
	display.appendChild(recordImage;
	display.appendChild(recordType);
	display.appendChild(recordMakeupLine);
	display.appendChild(recordPrice);
	display.appendChild(recordStars);


}


