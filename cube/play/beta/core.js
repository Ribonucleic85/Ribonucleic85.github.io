function* Matrix(m,o,d=1,r) {
	const s = m.length**0.5>>0;

	r==undefined || r--;

	/* -90, 90, 180, -row, row, -col, col */
	var x,xl,xi,y,yl,yi; 
	[x,xl,xi,y,yl,yi] = [
		[[s-1,-1,-1,0,s,1], [0,s,1,s-1,-1,-1], [m.length-1,-1,-1,0,1,1,]],
		[[s-1,-1,-1,r,r+1,1], [0,s,1,r,r+1,1]],
		[[r,r+1,1,s-1,-1,-1], [r,r+1,1,0,s,1]]
	][
		["rot","row","col"].indexOf(o)
	][
		[-1,1,2].indexOf(d)
	];

	var xr = x
	,   yr = y;

	for (x=xr; x!=xl; x+=xi) {
		for (y=yr; y!=yl; y+=yi) {
			yield [m[y*s+x], y*s+x];
		}
	}
	return;
}
