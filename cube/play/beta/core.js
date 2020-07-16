const MatrixEq = (x, xl, xi, y, yl, yi, sqrt, m) => {
	var xr = x
	,   yr = y
	,   arr = [];
	for (y=yr; y!=yl; y+=yi) {
		for (x=xr; x!=xl; x+=xi) {
			arr.push(m[x*sqrt+y]);
		}
	}
	return arr;
}

/* compact if-less version */
const Matrix = (x,m,d=1,r) => {
	const s = x.length**0.5>>0;
	/* -90, 90, 180, -row, row, -col, col */
	return MatrixEq(...[[[0,s,1,s-1,-1,-1,s,x],[s-1,-1,-1,0,s,1,s,x],[0,1,1,s**2-1,-1,-1,s,x]],
	[[r,r+1,1,s-1,-1,-1,s,x],[r,r+1,1,0,s,1,s,x]],[[s-1,-1,-1,r,r+1,1,s,x],[0,s,1,r,r+1,1,s,x]]][
	["rot","row","col"].indexOf(m)][[-1,1,2].indexOf(d)]);
}
