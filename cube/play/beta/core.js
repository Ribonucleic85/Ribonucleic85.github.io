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

/* semi-compact if-less version */
const Matrix = (matrix,mode,direction=1,rowcol) => {
	var sqrt = (matrix.length**0.5) >> 0;

	return MatrixEq(...
	/* -90 */	[[[0,sqrt,1,sqrt-1,-1,-1,sqrt,matrix],
	/* 90  */	[sqrt-1,-1,-1,0,sqrt,1,sqrt,matrix],
	/* 180 */	[0,1,1,sqrt**2-1,-1,-1,sqrt,matrix]],[
	/* -r  */	[rowcol,rowcol+1,1,sqrt-1,-1,-1,sqrt,matrix],
	/* r   */	[rowcol,rowcol+1,1,0,sqrt,1,sqrt,matrix]],[
	/* -c  */	[sqrt-1,-1,-1,rowcol,rowcol+1,1,sqrt,matrix],
	/* c   */	[0,sqrt,1,rowcol,rowcol+1,1,sqrt,matrix]]
		][["rot","row","col"].indexOf(mode)][[-1,1,2].indexOf(direction)]
	);
}
