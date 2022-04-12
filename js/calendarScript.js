//declare variables
let currentMonth = 0;
let monthNames= ["January","February","March","April","May","June","July","August","September","October","November","December"];

//set text to be equal to month found at index 0
document.getElementById("monthID").innerHTML = monthNames[currentMonth];

//when down arrow pressed
function monthForward(currentMonth, monthNames){
	currentMonth++; //append index by 1
	if(currentMonth == 12){ //if index is equal to 12 reset the index to 0
		currentMonth = 0;
	}
	
	if((currentMonth == 3) || (currentMonth == 5) || (currentMonth == 8) || (currentMonth == 10)){
		document.getElementById("day31").style.display = "none";
	} else if(currentMonth == 1){
		document.getElementById("day31").style.display = "none";
		document.getElementById("day30").style.display = "none";
	} else {
		document.getElementById("day31").style.display = "block";
		document.getElementById("day30").style.display = "block";
	}
	
	//set text to be equal to month found at currentMonth index
	document.getElementById("monthID").innerHTML = monthNames[currentMonth];
	return currentMonth;
}

//when down arrow pressed
function monthBack(currentMonth, monthNames){
	currentMonth--; //append index by 1
	if(currentMonth < 0){ //if index is equal to 12 reset the index to 0
		currentMonth = 11;
	}
	
	if((currentMonth == 3) || (currentMonth == 5) || (currentMonth == 8) || (currentMonth == 10)){
		document.getElementById("day31").style.display = "none";
	} else if(currentMonth == 1){
		document.getElementById("day31").style.display = "none";
		document.getElementById("day30").style.display = "none";
	} else {
		document.getElementById("day31").style.display = "block";
		document.getElementById("day30").style.display = "block";
	}
	
	
	
	//set text to be equal to month found at currentMonth index
	document.getElementById("monthID").innerHTML = monthNames[currentMonth];
	return currentMonth;
}


