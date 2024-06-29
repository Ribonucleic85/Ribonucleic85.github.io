function findDuplicateLines(src) {
	var lineCount = findLineBreaks(src.value).length + 1
	,	lineToMatch
	,	lineNoToMatch = 1
	,	currentLine
	,	currentLineNo = 2
	,	matchedLines = [];

	for (; lineNoToMatch<lineCount; lineNoToMatch++) {
		if (matchedLines.indexOf(lineNoToMatch) > -1) {
			continue;
		}
		selectLine(src, lineNoToMatch);
		lineToMatch = src.value.slice(ta.s,ta.e);

		for (currentLineNo=lineNoToMatch+1; currentLineNo<=lineCount; currentLineNo++) {
			selectLine(src, currentLineNo);
			currentLine = src.value.slice(ta.s,ta.e);

			if (currentLine == lineToMatch) {
					matchedLines.push(currentLineNo);
			}
		}
	}
	return matchedLines;
}

function copyLines(src, dst, dup) {
	var lineCount = findLineBreaks(src.value).length + 1
	,	currentLineNo = 1
	,	dup = dup || [];

	for (; currentLineNo<=lineCount; currentLineNo++) {
		if (dup.indexOf(currentLineNo) > -1) {
			continue;
		}
		selectLine(src, currentLineNo);
		dst.value += src.value.slice(ta.s,ta.e) + "\n";
	}
}
