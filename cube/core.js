Array.prototype.rightRot = function() {
	this.unshift(this.pop());
	return this;
}
/* not needed atm */ /*
Array.prototype.leftRot = function() {
	this.push(this.shift());
	return this;
}*/
Object.prototype.inv = function() {
	for (let i in this) {
		if (this.hasOwnProperty(i))
			i[2] += "'",
			i[3] += "'";
	}
}
/*
Object.prototype.Lock = function() {
	Object.freeze(this);
	for (let i in this) {
		if (this.hasOwnProperty(i))
			Object.freeze(i);
	}
}*/
function listenForEventOn(els, att, fn) {
	for (let el in els) {
		el = document.getElementById(el);
		if (el.addEventListener) {
			el.addEventListener(att, fn);
		}
	}
}

const trans = (alg, ax) => {
	var Edge, Midd, cm, ccw, ed, mi, edsh, mish; // cm is dealt with in for..of loops

	//    x,y,z = 90 deg
	// xi,yi,zi = 90 deg rev
	// x2,y2,z2 = 180 deg done by running x, y or z twice

	Edge = {
		"x": [..."FUBD"],  "x'": [..."DBUF"],
		"y": [..."FLBR"],  "y'": [..."RBLF"],
		"z": [..."URDL"],  "z'": [..."LDRU"]
	};
	Midd = {
		"x": [..."ESES"],  "x'": [..."SESE"],
		"y": [..."SMSM"],  "y'": [..."MSMS"],
		"z": [..."EMEM"],  "z'": [..."MEME"]
	};
	Midd.inv();
	// Edge.Lock();
	// Midd.Lock(); // freezing these might be getting in the way?

	alg = alg.split(" ");
	cm = 0;
	ccw = !1;

	ed   = [...Edge[ax]];
	edsh = [...Edge[ax]];
	edsh.rightRot();

	mi   = [...Midd[ax]];
	mish = [...Midd[ax]];
	mish.rightRot();

	for (; cm<alg.length; cm++) {
		// ccw move?
		if (alg[cm].indexOf("'") != -1)
			ccw = !0, // move is ccw
			alg[cm] = alg[cm][0]; // convert move to cw

		// edge move?
		if (ed.indexOf(alg[cm]) != -1) {
			alg[cm] = ed[edsh.indexOf(alg[cm])]; // is edge move so transform it to next move in the sequence
			alg[cm] += ccw? "'": ""; // if move was ccw change it back
			ccw = !1; // ccw indicator to false, no point in checking what it is, just do it
			continue;
		}

		// middle move?
		if (mi.indexOf(alg[cm]) != -1) {
			logBox("middle move routine log, is a move getting through despite the check?");
			logBox(mi +" & "+ mish +" ; << mi & mish >> check arrays")
			logBox(alg[cm] +" ; << alg[cm] >> before ccw check");
			alg[cm] += ccw? "'": "";
			logBox(alg[cm] +" ; << alg[cm] >> after ccw check, before move shift");
			ccw = !1;
			logBox(mish.indexOf(alg[cm]) +" ; << mish.indexOf(alg[cm]) >> before move shift");
			logBox(alg[cm] +" in "+ mish +"? ; << alg[cm] in mish ? >> before move shift");
			alg[cm] = mi[mish.indexOf(alg[cm])]; // is middle move so transform it to next move in the sequence
			logBox(alg[cm] +" ; << alg[cm] >> after move shift");
			logBox("-----------------------------------------------------------------");
			continue;
		}

		// if no match is found then the move doesn't need to change
		// for example in a y transform L, R and M moves are not changed
	}

	return alg.join(" ");
}
