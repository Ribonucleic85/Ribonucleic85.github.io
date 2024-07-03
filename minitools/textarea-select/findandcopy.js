function findDuplicateLines(src, lnBr=[]) {
	lnBr = lnBr.length? lnBr: findLineBreaks(src.value);

	var lineCount = lnBr.length + 1
	,	lineToMatch
	,	lineNoToMatch = 1
	,	currentLine
	,	currentLineNo = 2
	,	matchedLines = [];

	for (; lineNoToMatch<lineCount; lineNoToMatch++) {
		if (matchedLines.indexOf(lineNoToMatch) > -1) {
			continue;
		}
		lineToMatch = src.value.slice(...lineIndexes(src, lineNoToMatch, lnBr));

		for (currentLineNo=lineNoToMatch+1; currentLineNo<=lineCount; currentLineNo++) {
			currentLine = src.value.slice(...lineIndexes(src, currentLineNo, lnBr));

			if (currentLine == lineToMatch) {
					matchedLines.push(currentLineNo);
			}
		}
	}
	return matchedLines;
}

function copyLines(src, dst, duplicateList=false, lnBr=[]) {
	lnBr = lnBr.length? lnBr: findLineBreaks(src.value);
	duplicateList = duplicateList? findDuplicateLines(src,lnBr): [];
	byId("dupeLinesArray").value = duplicateList;

	var lineCount = lnBr.length + 1
	,	currentLineNo = 1
	,	output = "";

	for (; currentLineNo<=lineCount; currentLineNo++) {
		if (duplicateList.indexOf(currentLineNo) > -1) {
			continue;
		}
		output += src.value.slice(...lineIndexes(src, currentLineNo, lnBr)) + "\n";
	}
	dst.value = output.slice(0,-1);
}
