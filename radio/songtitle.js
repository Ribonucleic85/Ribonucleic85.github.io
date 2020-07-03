const url = "https://s48.myradiostream.com:10901/7.html";
const songTitle = document.getElementById("songTitle");

var displaySong = (sn,da) => {
	sn = sn.split("\n")[1].split(",")[6];
	if (typeof da.value == "string")
		da.value = sn;
	else if (typeof da.innerText == "string")
		da.innerText = sn;
}

var xhttp = {
	request: null,
	response: null,
	set response(responseContent) {
		displaySong(responseContent, songTitle);
		setTimeout(getTxtFile(url), 500);
	}
}

var getTxtFile = f => {
	xhttp.request = new XMLHttpRequest();
	xhttp.request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			xhttp.response = this.responseText;
		}
	};
	xhttp.request.open("GET", f, true);
	xhttp.request.send();
}

getTxtFile(url);
