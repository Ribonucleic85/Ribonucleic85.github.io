
/* Square Matrix rotator
   ----------------------
   This was designed to rotate a matrix with a number of
   elements that is a square number e.g. 3x3 = 9; It might
   be able to rotate other size matrices however i cannot
   predict the results of trying such.

   To use feed a Matrix to m in the form of a flat array;
   e.g. a 2x2: [4,7,3,0]; and specify a direction with d
   or it will just rotate clockwise

   m = Matrix to rotate
   d = Rotation direction:
	1  = clockwise (default)
	-1 = anti clockwise

   x & y = Matrix co-ords
   nm    = New matrix
   sr    = Square root of matrix size rounded down
*/
const MatrixRot = (m,d=1) => {
	var x, y,
	nm = [],
	sr = Math.sqrt(m.length)>>0;
	for (y=0; y<sr; y++)
		for (x=sr-1; x>-1; x--)
			if (d==-1)
				nm.push(m[m.length-1-(x*sr+y)]);
			else if (d==1)
				nm.push(m[x*sr+y]);
	return nm;
}
