const ta = {
	s: 0,
	e: 0,
	set sel(n) {
		n.focus();
		n.selectionStart=this.s
		n.selectionEnd=this.e;
	}
}

const findLineBreaks = (src) => {
	var A = [],
	i = 0,
	s = 0,
	a = 0;
	while (i!=-1) {
		i = src.indexOf("\n", s);
		if (i!=-1)
			A[a] = i,
			s = i+1,
			a++;
	}
	return A;
}

const selectLine = (src,lnNo) => {
	if (lnNo==0)
		return;
	const lnBr = findLineBreaks(src.value);
	if (lnNo>lnBr.length+1)
		return;
	const srcLen = src.value.length;
	if (lnBr.length==0)
		ta.s = 0,
		ta.e = srcLen;
	else if (lnNo==1)
		ta.s = 0,
		ta.e = lnBr[0];
	else if (lnNo==lnBr.length+1)
		ta.s = lnBr[lnBr.length-1]+1,
		ta.e = srcLen;
	else
		ta.s = lnBr[lnNo-2]+1,
		ta.e = lnBr[lnNo-1];
	ta.sel = src;
}

const selectedRange = (ta, st, en) => {
	st.value = ta.selectionStart;
	en.value = ta.selectionEnd;
}

const doSelect = (src, st, en) => {
	ta.s = st.value;
	ta.e = en.value;
	ta.sel = src;
}

/* https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
*   Setting inputTextarea.selectionStart and inputTextarea.selectionEnd manually
*   didn't work to well so in future i will try inputTextarea.setSelectionRange()
*/
