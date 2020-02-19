var trans = (alg, ax) => {
	var Edge, Midd;
	Edge = {
		"x": [[..."FUBD"],[..."fubd"]], "x'": [[..."DBUF"],[..."dbuf"]],
		"y": [[..."FLBR"],[..."flbr"]], "y'": [[..."RBLF"],[..."rblf"]],
		"z": [[..."URDL"],[..."urdl"]], "z'": [[..."LDRU"],[..."ldru"]]
	};
	Midd = {
		"x": [["E","S","E'","S'"],["e","s","e'","s'"]], "x'": [["S","E","S'","E'"],["s","e","s'","e'"]],
		"y": [["S","M","S'","M'"],["s","m","s'","m'"]], "y'": [["M","S","M'","S'"],["m","s","m'","s'"]],
		"z": [["E","M","E'","M'"],["e","m","e'","m'"]], "z'": [["M","E","M'","E'"],["m","e","m'","e'"]]
	};
	var ed, edsh, mi, mish;
	ed   = [[...Edge[ax][0]],[...Edge[ax][1]]];
	edsh = [ ...([...ed[0]].rightRot()), ...([...ed[1]].rightRot()) ];
	ed   = [ ...ed[0], ...ed[1] ];
	mi   = [[...Midd[ax][0]],[...Midd[ax][1]]];
	mish = [...([...mi[0]].rightRot()), ...([...mi[1]].rightRot())];
	mi   = [...mi[0], ...mi[1]];

	alg = alg.split(/\s/);
	for (var cur,cm=0; cm<alg.length; cm++) {
		cur = alg[cm].match(/[A-Za-z]/g).pop();
		if (ed.indexOf(cur) != -1)
			alg[cm] = alg[cm].replace(cur, ed[edsh.indexOf(cur)]);
		else if (mi.indexOf(cur) != -1)
			alg[cm] = alg[cm].replace(cur, mi[mish.indexOf(cur)]);
	}

	return alg.join(" ");
}
