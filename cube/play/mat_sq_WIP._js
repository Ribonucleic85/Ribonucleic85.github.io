var MatrixRot = (m,c,d=1,mode) => {
	var nm = []
	,   sr = (m.length**0.5) >> 0;


	/* For x or y (depending on mode) we define an array
	*  with the following 3 values:
	*
	*  - value	:: initial value for loop
	*  - limit	:: limit for the value
	*  - direction	:: loop direction:
	*			-1 = down;
	*			 0 = static/none;
	*			 1 = up
	*
	*  By adding the direction toward the value limit the
	*  loop automatically goes in the direction the value
	*  is for; e.g. adding 0 keeps it static.
	*
	*  To make sure the loop doesn't end up infinite the
	*  conditional ternary operator will be used in the
	*  conditional check of the loop (middle field)
	*/

	if (mode=="col") {
		var x,y = [c,c,0];
		switch(d) {
			default:
			case 1:  x = [0,sr,1]; break;
			case -1: x = [sr-1,-1,-1]; break;
		}
	}

	if (mode=="row") {
		var y,x = [c,c,0];
		switch(d) {
			default:
			case 1:  y = [0,sr,1]; break;
			case -1: y = [sr-1,-1,-1]; break;
		}
	}

	if (mode=="rot" && d!=2) {
		var x = [sr-1,-1,-1]
		,   y = [0,sr,1];
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

