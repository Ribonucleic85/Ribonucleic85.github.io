const jsbox = (src) => {
	try {
		src = document.getElementById(src);
	}
	catch(e) {
		return;
	}

	var timeout = false;

	try {
		eval(src.value);
	}
	catch(E) {
		timeout = true;
		src.style.backgroundColor = "#fa8072";
	}
	if (timeout)
		setTimeout(()=>{ src.style.backgroundColor=""; }, 3000);

	src.focus();
}

// only tested in chrome, still WIP
var jsboxAdv = (src) => {
	try {
		src = document.getElementById(src);
		var err = document.getElementById("jsErr");
		var errBox = document.getElementById("jsErrbox");
		err.innerText = "";
		errBox.setAttribute("style","display:none;");
	}
	catch(e) {
		return;
	}

	var timeout = false;

	try {
		eval(src.value);
	}
	catch(E) {
		timeout = true;
		src.style.backgroundColor = "#fa8072";

		// show error text box
		// error will display till next healthy eval
		errBox.removeAttribute("style");

		// write error to error text box / old errors are overwritten
		err.innerText = E.stack;
	}
	if (timeout) // vv remove red background after 3 seconds vv
		setTimeout(()=>{ src.style.backgroundColor=""; }, 3000); 

	src.focus();
}
