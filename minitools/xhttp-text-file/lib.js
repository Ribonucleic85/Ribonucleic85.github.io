const getTxtFile = (f,d) => {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			d.value = this.responseText;
		}
	};
	xhttp.open("GET", f, true);
	xhttp.send();
}
