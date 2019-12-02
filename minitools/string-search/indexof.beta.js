// This is a beta so global consts are not used so that they can be overwritten during live tests

/*	An extension of indexOf, with 2 new functions (indexesOf and perLineIndexesOf)
**	both designed to extract all matches, and both are compatible with RegEx because
**	they both need indexOf to function which is extended to use RegEx via manipulation
**	of RegEx search()
*/

/************* Notes and comments **************
*/
/*	indexOf() ;; String.prototype
**	indexof() == original indexOf()
**
**	This new indexOf is just to add RegEx compatibility there
**	is no reason for indexOf to not support RegEx especially
**	when search(RegEx) is woefully inadequate because it misses
**	the option to search from a given point
*/
/*************************/
/*	indexesOf() ;; Sting.prototype
**
**	To find line breaks pass searchTerm = "\n"
**
**	This searcher keeps adding indexes for the given
**	search term and when -1 is added it is popped off by
**	the loop conditions and the rest of the indexes
**	are returned unless there are none in which case
**	-1 is returned
*/
const readMe = "typeCheck\n  returns: String, RegExp, Array, Number, Float or False ..\n\ngetLines (lnNo, lnBr)\n  lnNo: Line Number OR Array (for multiple lines)\n  lnBr: Line break Array (optional; can create its own)\n\n  returns: Line content as Strings\n    if just one line it will be a String\n    if multiple lines it will be an Array of Strings\n\nindexOf\n  returns: the first index of the search term passed\n    if not found it returns -1\n\nindexesOf\n  returns: same as indexOf but returns all indexes as\n    an array\n\nperLineIndexesOf\n  returns: same as indexesOf but indexes are returned\n    as a series of sub arrays with a line number in the\n    following format:\n      ret = [ [line, indexes], [line, indexes], .. ]";


var typeCheck = o => {
	var ob = o;
	o = Object.prototype.toString.call(o);
	return (
		o=="[object String]" ?
			"String":
		o=="[object RegExp]" ?
			"RegExp":
		o=="[object Array]" ?
			"Array":
		!(o=="[object Number]" && (isFinite(ob) && !isNaN(ob))) ?
			false: /* NaN / also not String, RegExp or Array */
		Number.isInteger(ob) ?
			"Number":
			"Float"
	);
}

String.prototype.indexer = (lnNm,lnBr) => {
	(lnNm<=0 || lnBr.length==0) ?
		[0, src.length]:
	lnNm==1 ?
		[0, lnBr[0]]:
	lnNm>=lnBr.length+1 ?
		[lnBr[lnBr.length-1]+1, src.length]:
	/* else */ // ?
		[lnBr[lnNm-2]+1, lnBr[lnNm-1]]
};


String.prototype.getLineNos = function(searchTerm,lnBr) {
	const src = this;
	if (typeCheck(lnBr)!="Array")
		lnBr = src.indexesOf("\n");
	var lnNo = 1,
	l = [];
	while (lnNo<lnBr.length) {
		if (src.substring(...src.indexer(lnNo,lnBr)).indexOf(searchTerm)!=-1)
			l.push(lnNo);
		lnNo++;
	}
	return l;
}


String.prototype.getLines = function(lnNo,lnBr) {
	const src = this;
	if (typeCheck(lnBr)!="Array")
		lnBr = src.indexesOf("\n");
	if (typeCheck(lnNo)=="Number")
		return src.substring(...src.indexer(lnNo,lnBr));
	var l = [];
	while (lnNo.length)
		l.push(src.substring(...src.indexer(lnNo.shift(),lnBr)));
	return l;
}


String.prototype.indexof = String.prototype.indexOf;
String.prototype.indexOf = function(searchTerm,startIndex) {
	startIndex = startIndex || 0;
	var tc = typeCheck(searchTerm);
	if (tc=="String" || tc=="Number" || tc=="Float")
		return this.indexof(searchTerm,startIndex);
	if (tc=="RegExp") {
		// Need to patch in Global and Multiline flags
		var offsetIndex = this.substring(startIndex).search(searchTerm);
		return offsetIndex!=-1? (offsetIndex+startIndex): -1;
	}
	return -1;
}


String.prototype.indexesOf = function(searchTerm) {
	var i = [];
	while (i[i.length-1]!=-1? true: !i.pop() && false)
		i.push(this.indexOf(searchTerm, i.length? i[i.length-1]+1: 0));
	return i.length? i: -1;
}


String.prototype.perLineIndexesOf = function(searchTerm) {
	var i = [],
	lnBr = this.indexesOf("\n");
	while (i.length<lnBr.length+1)
		i.push([ i.length+1, this.getLines(i.length+1,lnBr).indexesOf(searchTerm) ]);
	i.push([]); i.push([]);
	while (i.length>2)
		i[i.length-(i[0][1]==-1? 2: 1)].push(i.shift());
	i.shift();
	return [...i[0]];
}
