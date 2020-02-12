var MatrixRot = (mat,coord,dir=1,mode) => {
	var x,y
	,   nums = []
	,   sqrt = (mat.length**0.5) >> 0;

	if (mode=="col") {
		y = [coord, coord, 0];
		switch(dir) {
			default:
			case 1:   x = [0, sqrt, 1];		break;
			case -1:  x = [sqrt-1, -1, -1];		break;
		}
	}

	if (mode=="row") {
		x = [coord, coord, 0];
		switch(dir) {
			default:
			case 1:   y = [0, sqrt, 1];		break;
			case -1:  y = [sqrt-1, -1, -1];		break;
		}
	}

	if (mode=="rot") {
		switch(dir) {
			default:
			case 1:
				// 90deg
				x = [sqrt-1, -1, -1],
				y = [0, sqrt, 1]; break;

			case 2:
				// 180 deg 
				x = [0, 1, 1],
				y = [sqrt**2-1, -1, -1]; break;

			case -1:
				// -90deg
				x = [0, sqrt, 1],
				y = [sqrt-1, -1, -1]; break;
		}
	}



	for (y=0; y<sr; y++)
		for (x=sr-1; x>-1; x--)
			nm.push(m[x*sr+y]);
	return nm;
}

/* m = matrix
 * y = row (0-n)
 *
var Col = (m,y,d=1,mult) => {
	var ret = Matrix(m, (mult?y[0]:y), d, "col");
	ret = mult? [ret]: ret;
	if (mult)
		for (var i=1; i<mult.length; i++)
			ret.push(Matrix(m,y[i],d,"col"));

}



Row /* x = row (0-n) */

