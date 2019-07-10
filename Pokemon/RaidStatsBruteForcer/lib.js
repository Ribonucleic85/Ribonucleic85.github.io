function byId(i) {
	return document.getElementById(i)
}

function CalcRaidCP(Att, Def, Sta) {
	return Math.floor((Att+15) * Math.sqrt(Def+15) * Math.sqrt(Sta) / 10);
}

function bruteForceAttDef() {
	var o = byId('bruteForceOutput'), a, d
	,   al = +byId('attLow').value,  au = +byId('attUpp').value
	,   dl = +byId('defLow').value,  du = +byId('defUpp').value
	,   st = +byId('raidSta').value, cp = +byId('raidCp').value
	,   mcp, CpCompare = byId('CpComp').checked;

	for (a=al; a<=au; a++) {
		for (d=dl; d<=du; d++) {
			mcp = CalcRaidCP(a,d,st);
			if (CpCompare && !(cp==mcp))
				continue;
			else
				o.value += a+ " / " +d+	" / " +st+ " = " + mcp + "\n";
		}
	}
}
/* ^ ^ ^ ^
	o   // output
  a   // attack loop counter
  d   // defense loop counter
	al  // attack lower bound
	au  // attack upper bound
	dl  // defense lower bound
	du  // defense upper bound
	st  // raid stamina, ranges from ~600 to ~15000
	       cp // cp to compare
        mcp // cp calculated per att and def pair for comparison with 'cp'
  CpCompare // reference to checkbox to determine whether to
            // check for a particular cp or just list everything
*/


function tooManyWarning() {
	if (byId('CpComp').checked) {
		byId('tooMany').style.display = "none";
		return;
	}

	var count =  (( +byId('attUpp').value - +byId('attLow').value + 1) *
		( +byId('defUpp').value - +byId('defLow').value + 1));

	byId('tooMany').style.display = "";
	byId('tooMany').style.color = (count>499? "red":
		count<=0? "orange": "lime");

	byId('tooMany').innerHTML = "The number of results will be: " +count+ ".. "+
		(count>499? "This could cause slowdowns, instabilities"+
		" or a crash, proceed at your own risk or try a narrower range"+
		" of Attack and / or Defense":
		count<=0? "The total results prediction is too low, "+
		"adjust the Attack and / or Defense ranges":"");
}
