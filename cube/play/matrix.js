/* this is old redundant code, it is functional but a newer more concise function pair is in use */

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
var MatrixRot = (m,d=1) => {
	var x, y,
	nm = [],
	sr = m.length**0.5;
	sr >>= 0;
	for (y=0; y<sr; y++)
		for (x=sr-1; x>-1; x--)
			if (d==-1)
				nm.push(m[m.length-1-(x*sr+y)]);
			else if (d==1)
				nm.push(m[x*sr+y]);
	return nm;
}


/*
   Fetch a Column or Row from a Matrix in the form of a flat array
*/
/* Column:
   y = Column number ranging 0 - (Matrix_size - 1)
   d = Direction: 1 > Top to Bottom;; -1 > Bottom to Top

   If y is unspecified the first column will be returned,
   and if d is unspecified it will be top to bottom direction.
*/
var MatrixCol = (m,y=0,d=1) => {
	var x,
	nm = [],
	sr = m.length**0.5;
	sr >>= 0;
	if (d==1)
		for (x=0; x<sr; x++)
			nm.push(m[x*sr+y]);
	else if (d==-1)
		for (x=sr-1; x>-1; x--)
			nm.push(m[x*sr+y]);
	return nm;
}

/* Row (works same as above except for Rows instead of Columns)
*/
var MatrixRow = (m,x=0,d=1) => {
	var y,
	nm = [],
	sr = m.length**0.5;
	sr >>= 0;
	if (d==1)
		for (y=0; y<sr; y++)
			nm.push(m[x*sr+y]);
	else if (d==-1)
		for (y=sr-1; y>-1; y--)
			nm.push(m[x*sr+y]);
	return nm;
}
