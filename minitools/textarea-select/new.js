/*	this works, it just needs implementing, also perhaps adjust
**	behaviour to make it more consistent in caret placement
*/
const selectLineInj = (src,lnNo,lnBr) => {
	if (lnNo<=0 || lnNo>lnBr.length+1)
		return;
	const srcLen = src.value.length;
	[ta.s, ta.e] =
	lnBr.length==0?		[0,srcLen]:
	lnNo==1?		[0,lnBr[0]]:
	lnNo==lnBr.length+1?	[lnBr[lnBr.length-1]+1,srcLen]:
	/* else */		[lnBr[lnNo-2]+1,lnBr[lnNo-1]];
	ta.sel = src;
}
