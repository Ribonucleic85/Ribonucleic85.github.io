// need to reduce variable list

var trans = (alg, ax) => {
	var Edge, Midd, cm, cur, ca, ii, ed, edsh, mi, mish, getmove,
		EdgeLc, MiddLc, edLc, edshLc, miLc, mishLc;

	Edge = {
		"x": [..."FUBD"],  "x'": [..."DBUF"],
		"y": [..."FLBR"],  "y'": [..."RBLF"],
		"z": [..."URDL"],  "z'": [..."LDRU"]
	};
	EdgeLc = {
		"x": [..."fubd"],  "x'": [..."dbuf"],
		"y": [..."flbr"],  "y'": [..."rblf"],
		"z": [..."urdl"],  "z'": [..."ldru"]
	};
	Midd = {
		"x": ["E","S","E'","S'"],  "x'": ["S","E","S'","E'"],
		"y": ["S","M","S'","M'"],  "y'": ["M","S","M'","S'"],
		"z": ["E","M","E'","M'"],  "z'": ["M","E","M'","E'"]
	};
	MiddLc = {
		"x": ["e","s","e'","s'"],  "x'": ["s","e","s'","e'"],
		"y": ["s","m","s'","m'"],  "y'": ["m","s","m'","s'"],
		"z": ["e","m","e'","m'"],  "z'": ["m","e","m'","e'"]
	};

	ed   = [...Edge[ax]]; edsh = [...Edge[ax]]; edsh.rightRot();
	edLc   = [...EdgeLc[ax]]; edshLc = [...EdgeLc[ax]]; edshLc.rightRot();

	mi   = [...Midd[ax]]; mish = [...Midd[ax]]; mish.rightRot();
	miLc   = [...MiddLc[ax]]; mishLc = [...MiddLc[ax]]; mishLc.rightRot();

	alg = alg.split(/\s/);
	cm = 0;

	for (; cm<alg.length; cm++) {
		cur = alg[cm].match(/[A-Za-z]/g).pop(); //getmove(alg[cm]);
		logBox("init "+cm +"\ncur "+cur);

		if (!cur)
			continue;

		if (ed.indexOf(cur) != -1)
			alg[cm] = alg[cm].replace(cur, ed[edsh.indexOf(cur)]);
		else if (mi.indexOf(cur) != -1)
			alg[cm] = alg[cm].replace(cur, mi[mish.indexOf(cur)]);

		else if (edLc.indexOf(cur) != -1)
			alg[cm] = alg[cm].replace(cur, edLc[edshLc.indexOf(cur)]);
		else if (miLc.indexOf(cur) != -1)
			alg[cm] = alg[cm].replace(cur, miLc[mishLc.indexOf(cur)]);
	}

	return alg.join(" ");
}
