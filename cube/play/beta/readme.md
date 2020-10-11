This is designed to work with square Matrices only, in the form of a flat array.

	params

	  m = Matrix to work with.

	  o = What to do with the matrix:
		"rot" = Rotate by amount specified with d.
		"col" = Extract column r in direction d.
		"row" = Extract row r in direction d.

	  d = Rotation amount (clockwise) OR column or row direction:
		Rotation:
			-1 = -90 degrees.
			1  = 90 degrees.
			2  = 180 degrees.

		Column or row direction
			-1 = Bottom to top OR right to left.
			1  = Top to bottom OR left to right.

	  r = Row or column number.
		For example:
			-2 = 2nd column from the right OR
			    2nd row from the bottom.

			3 = 3rd column from the left OR 3rd
			   row from the top.


The function is a generator, here is an example use which fetches row one in reverse and stores it in matFnVals.

	var matrixFn = Matrix(["A","B","C","D","E","F","G","H","I"], "row", -1, 1)
	,   matFnVals = []
	,   yielded = matrixFn.next();

	while (!yielded.done) {
		matFnVals.push(yielded.value[0]);
		yielded = matrixFn.next();
	}
