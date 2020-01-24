// for simplicity function names will
// stay the same till out of beta

function dragElement(El) {
	var Ex = 0
	,   Ey = 0
	,   Mx = 0
	,   My = 0;

  // was onmousedown
	El.touchstart = dragMouseDown;

	function eventControl(e) {
		e = e || window.event;
		e.preventDefault();
		return e;
	}

	function mouseXY(e) {
		Mx = e.clientX;
		My = e.clientY;
	}

	function dragMouseDown(e) {
		e = eventControl(e);

		mouseXY(e);

		document.touchend = closeDragElement; // onmouseup
		document.touchmove = elementDrag; // onmousemove
	}

	function elementDrag(e) {
		e = eventControl(e);

		Ex = Mx-e.clientX;
		Ey = My-e.clientY;
		mouseXY(e);

		El.style.top = El.offsetTop-Ey + "px";
		El.style.left = El.offsetLeft-Ex + "px";
	}

	function closeDragElement() {
		document.touchend = null;
		document.touchmove = null;
	}
}
