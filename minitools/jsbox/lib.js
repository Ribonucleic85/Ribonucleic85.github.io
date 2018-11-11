/*
  src = text element
*/

const jsbox = (src) => {
	try { src = document.getElementById(src); }
	catch(e) { return; }
	try { eval(src.value); }
	catch(E) { src.style.backgroundColor = "#fa8072"; }
	finally { setTimeout(()=>{ src.style.backgroundColor=""; }, 3000); }
}
