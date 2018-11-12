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
