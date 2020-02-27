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

/*****************************************/
/* new revision with injector (untested) */

var MatrixRot = (matrix,coord,direction=1,mode) => {
	var x,y,op
	,   nums = []
	,   sqrt = (matrix.length**0.5) >> 0;

	const inj = n => new Function("return " +n)();

	op = {
		dir: c => { (c.dir===1 || c.dir===0)? 1: -1; }
	};

	if (mode=="injectnewlim") {
		op.lim = c => {
			return inj(coord[7]);
		}
		mode = "inject";
    }

	else {
		op.lim = c => {
			return c.val<=c.lim? c.i<=c.lim: c.i>=c.lim;
		}
    }

	if (mode=="col") {
		y = { val: coord,  lim: coord,  dir: 0 };
		switch (direction) {
			default:
			case 1:  x = { val: 0,  lim: sqrt,  dir: 1 };     break;
			case -1: x = { val: sqrt-1,  lim: -1,  dir: -1 }; break;
		}
	}

	else if (mode=="row") {
		x = { val: coord,  lim: coord,  dir: 0 };
		switch (direction) {
			default:
			case 1:  y = { val: 0,  lim: sqrt,  dir: 1 };     break;
			case -1: y = { val: sqrt-1,  lim: -1,  dir: -1 }; break;
		}
	}

	else if (mode=="rot") {
		switch (direction) {
			default:
			/* 90 deg */ case 1:
				x = { val: sqrt-1,  lim: -1,  dir: -1 },
				y = { val: 0,  lim: sqrt,  dir: 1 };
			break;
			/* 180 deg */ case 2:
				x = { val: 0,  lim: 1,  dir: 1 },
				y = { val: sqrt**2-1,  lim: 1,  dir: -1 };
			break;
			/* -90 deg */ case -1:
				x = { val: 0,  lim: sqrt,  dir: 1 },
				y = { val: sqrt-1,  lim: -1,  dir: -1 };
			break;
		}
	}

	else if (mode=="inject") {
		x = { val: inj(coord[0]), lim: inj(coord[1]), dir: inj(coord[2]) };
		y = { val: inj(coord[3]), lim: inj(coord[4]), dir: inj(coord[5]) };
	}

	else {
		//logBox("Invalid mode choose: 'rot', 'row' or 'col'");
		return false;
	}

	x.i = x.val;
	y.i = y.val;

	var looplim = 0;
	for (; op.lim(y); y.i+=op.dir(y)) {
		for (; op.lim(x); x.i+=op.dir(x)) {
			//logBox("x: "+ x.i +" y: "+ y.i);
			nums.push(matrix[x.i*sqrt+y.i]);
			if (looplim>50)
				return "too much";
			looplim++;
		}
	}
	return nums;
}
