Array.prototype.rightRot = function() {
	this.unshift(this.pop());
	return this;
}
Array.prototype.leftRot = function() {
this.push(this.shift());
return this;
}
Array.prototype.inv = function(){ this[2]+="'"; this[3]+="'"; }

// except for the prototypes this code is untested, use at your own risk

const Lock = function(){
  for (let al of arguments)
    Object.freeze(al);
}

//    x,y,z = 90 deg
// xi,yi,zi = 90 deg rev
// x2,y2,z2 = 180 deg done by running x, y or z twice

const Edge = {
  "x": [..."FUBD"],  "x'": [..."DBUF"],
  "y": [..."FLBR"],  "y'": [..."RBLF"],
  "z": [..."URDL"],  "z'": [..."LDRU"]
};
const Midd = {
  "x": [..."ESES"],  "x'": [..."SESE"],
  "y": [..."SMSM"],  "y'": [..."MSMS"],
  "z": [..."EMEM"],  "z'": [..."MEME"]
};
Midd["x"].inv(),  Midd["y"].inv(),  Midd["z"].inv(),
Midd["x'"].inv(), Midd["y'"].inv(), Midd["z'"].inv()

Lock(
  Edge, Edge["x"], Edge["y"], Edge["z"], Edge["x'"], Edge["y'"], Edge["z'"],
  Midd, Midd["x"], Midd["y"], Midd["z"], Midd["x'"], Midd["y'"], Midd["z'"]
);

trans = (alg, ax)=>{
  var /*cm*/ ccw, ed, mi, edsh, mish; // cm is dealt with in for..of loops

  alg = alg.split(" ");
  ccw = !1; // is move ccw?

  ed   = [...Edge[ax]];
  mi   = [...Midd[ax]];
  edsh = [...Edge[ax]];
  mish = [...Midd[ax]];
  edsh.rightRot();
  mish.rightRot();

  for (let cm of alg) {
    // ccw move?
    if (cm.indexOf("'") != -1)
      ccw = !0, // move is ccw
      cm = cm[0]; // convert move to cw

    // edge move?
    if (ed.indexOf(cm) != -1) {
      cm = ed[edsh.indexOf(cm)]; // is edge move so transform it to next move in the sequence
      cm += ccw? "'": ""; // if move was ccw change it back
      ccw = !1; // ccw indicator to false, no point in checking what it is, just do it
      continue;
    }

    // middle move?
    if (mi.indexOf(cm) != -1) {
      cm += ccw? "'": "";
      ccw = !1;
      cm = mi[mish.indexOf(cm)]; // is middle move so transform it to next move in the sequence
      continue;
    }
    
    // if no match is found then the move doesn't need to change
    // for example in a y transform L, R and M moves are not changed
  }

  alg.push(""); // add blank entry, this will hold the reconstructed array

  while (alg.length>1) {
    alg[alg.length-1] += alg.shift() + (alg.length>2? " ": "");
  }
  
  return alg[0]; // if we returned alg then it would be a single item array
}
