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

const Matrix = (matrix,mode,direction=1,rowcol) => {
	var sqrt = (matrix.length**0.5) >> 0;
	if (mode=="rot") {
		if (direction==-1) {
			return MatrixEq(0,sqrt,1, sqrt-1,-1,-1, sqrt, matrix);
		}
		else if (direction==1) {
			return MatrixEq(sqrt-1,-1,-1, 0,sqrt,1, sqrt, matrix);
		}
		else if (direction==2) {
			return MatrixEq(0,1,1, sqrt**2-1,-1,-1, sqrt, matrix);
		}
	}
	else if (mode=="row") {
		if (direction==1) {
			return MatrixEq(rowcol,rowcol+1,1, 0,sqrt,1, sqrt, matrix);
		}
		else if (direction==-1) {
			return MatrixEq(rowcol,rowcol+1,1, sqrt-1,-1,-1, sqrt, matrix);
		}
	}
	else if (mode=="col") {
		if (direction==1) {
			return MatrixEq(0,sqrt,1, rowcol,rowcol+1,1, sqrt, matrix);
		}
		else if (direction==-1) {
			return MatrixEq(sqrt-1,-1,-1, rowcol,rowcol+1,1, sqrt, matrix);
		}
	}
}
