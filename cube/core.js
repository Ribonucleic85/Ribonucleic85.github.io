Array.prototype.rightRot = function() {
	this.unshift(this.pop());
	return this;
}
/* not needed atm */ /*
Array.prototype.leftRot = function() {
	this.push(this.shift());
	return this;
}*/
/*
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
			ccw = !0,
			alg[cm] = alg[cm][0];

		if (ed.indexOf(alg[cm]) != -1)
			alg[cm] = ed[edsh.indexOf(alg[cm])],
			alg[cm] += ccw? "'": "",
			ccw = !1,
			continue;

		alg[cm] += ccw? "'": "";
		ccw = !1;

		if (mi.indexOf(alg[cm]) != -1)
			alg[cm] = mi[mish.indexOf(alg[cm])],
			continue;
	}

	return alg.join(" ");
}
