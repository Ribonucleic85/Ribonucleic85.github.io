Array.prototype.rightRot = function() {
	this.unshift(this.pop());
	return this;
}
/* not needed atm
Array.prototype.leftRot = function() {
	this.push(this.shift());
	return this;
}*/
/* used to work but doesn't now, dunno why
Object.prototype.inv = function() {
	for (let i in this) {
		if (this.hasOwnProperty(i))
			i[2] += "'",
			i[3] += "'";
	}
}*/
/*
Object.prototype.Lock = function() {
	Object.freeze(this);
	for (let i in this) {
		if (this.hasOwnProperty(i))
			Object.freeze(i);
	}
}*/
/* events get added correctly but don't fire, i don't know why yet
function listenForEventOn(els, att, fn) {
	for (var i=0; i<els.length; i++) {
		els[i] = document.getElementById(els[i]);
		if (els[i].addEventListener) {
			els[i].addEventListener(att, fn);
		}
	}
}
*/

const trans = (alg, ax) => {
	var Edge, Midd, cm, ccw, ed, edsh, mi, mish;

	//    x, y, z = 90 deg
	// x', y', z' = 90 deg rev
	// x2, y2, z2 = 180 deg done by running x, y or z twice

	Edge = {
		"x": [..."FUBD"],  "x'": [..."DBUF"],
		"y": [..."FLBR"],  "y'": [..."RBLF"],
		"z": [..."URDL"],  "z'": [..."LDRU"]
	};
	Midd = {
		"x": ["E","S","E'","S'"],  "x'": ["S","E","S'","E'"],
		"y": ["S","M","S'","M'"],  "y'": ["M","S","M'","S'"],
		"z": ["E","M","E'","M'"],  "z'": ["M","E","M'","E'"]
	};

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
		if (alg[cm].indexOf("'") != -1)
			ccw = true,
			alg[cm] = alg[cm][0];

		if (ed.indexOf(alg[cm]) != -1) {
			alg[cm] = ed[edsh.indexOf(alg[cm])],
			alg[cm] += ccw? "'": "",
			ccw = false;
			continue;
		}

		alg[cm] += ccw? "'": "";
		ccw = false;

		if (mi.indexOf(alg[cm]) != -1) {
			alg[cm] = mi[mish.indexOf(alg[cm])];
			continue;
		}
	}

	return alg.join(" ");
}
