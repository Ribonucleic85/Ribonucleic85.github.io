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
**	To find line breaks pass sym="\n"
**
**	This searcher keeps adding indexes for the given
**	symbol and when -1 is added it is popped off by
**	the loop conditions and the rest of the indexes
**	are returned
*/



const typeCheck = (o) => {
	return  Object.prototype.toString.call(o)=="[object String]"? "String":
		Object.prototype.toString.call(o)=="[object RegExp]"? "RegExp":
		Object.prototype.toString.call(o)=="[object Number]"
		 && (isFinite(o) && !isNaN(o))?
		 (Number.isInteger(o)?		"Number":  "Float" ):
		false;
}


String.prototype.indexof = String.prototype.indexOf;
String.prototype.indexOf = function(searchTerm,startIndex) {
	var tc = typeCheck(searchTerm);
	startIndex = startIndex || 0;
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
	i = i.length? i: -1;
	return i;
}


String.prototype.perLineIndexesOf = function(searchTerm) {
	var i = [],
	lnBr = this.indexesOf("\n");
	lnBr.unshift(-1);
	lnBr.push(this.length-1);
	while(i.length<lnBr.length-1)
		i.push([
		  i.length+1,
		  this.substring(
		    lnBr[i.length]+1, lnBr[i.length+1]
		  ).indexesOf(searchTerm)
		]);
	i.push([]);
	i.push([]);
	while (i.length>2)
		i[i.length-(i[0][1]==-1? 2: 1)].push(i.shift());
	i.shift();
	i = [...i[0]];
	lnBr.shift();
	lnBr.pop();
	return [i, lnBr];
}

