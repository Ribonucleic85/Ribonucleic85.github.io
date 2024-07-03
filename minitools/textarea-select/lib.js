Array.prototype.last = function() {
	return this[this.length-1];
}

const ta = {
	s: 0,
	e: 0,
	set sel(n) {
		n.focus();
		n.selectionStart=this.s
		n.selectionEnd=this.e;
	}
}

var findLineBreaks = src => [...src.matchAll(/\n/g)].map(b => b.index);

function lineIndexes(src, lnNo, lnBr=[]) {
	var lnBr = lnBr.length? lnBr: findLineBreaks(src.value);

	return ( // 1st/all , last , between
		lnNo<=1? [0, (lnBr[0]||src.value.length)]:
		lnNo>=lnBr.length+1? [lnBr[lnBr.length-1]+1,src.value.length]:
		[lnBr[lnNo-2]+1,lnBr[lnNo-1]]
	);
}

function selectLine(src, lnNo, lnBr=[]) {
	const lnBr = lnBr.length? lnBr: findLineBreaks(src.value);

	[ta.s, ta.e] = 	/* 1st/all , last , between */
		lnNo<=1? [0, (lnBr[0]||src.value.length)]:
		lnNo>=lnBr.length+1? [lnBr[lnBr.length-1]+1,src.value.length]:
		[lnBr[lnNo-2]+1,lnBr[lnNo-1]];
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
