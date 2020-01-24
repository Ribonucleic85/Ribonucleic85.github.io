// for simplicity function names will
// stay the same till out of beta

function dragElement(El) {
	var Ex = 0
	,   Ey = 0
	,   Mx = 0
	,   My = 0;

	// was onmousedown
	El.ontouchstart = dragMouseDown;

	function eventControl(e) {
		e = e || window.event;
		e.preventDefault();
		return e;
	}

	function mouseXY(e) {
		Mx = e.targetTouches[0].pageX; //e.clientX;
		My = e.targetTouches[0].pageY; //e.clientY;
	}

	function dragMouseDown(e) {
		e = eventControl(e);

		mouseXY(e);

		El.ontouchend = closeDragElement; // onmouseup
		El.ontouchmove = elementDrag; // onmousemove
	}

	function elementDrag(e) {
		e = eventControl(e);

		Ex = Mx-e.targetTouches[0].pageX; // e.clientX;
		Ey = My-e.targetTouches[0].pageY; // e.clientY;
		mouseXY(e);

		El.style.top = El.offsetTop-Ey + "px";
		El.style.left = El.offsetLeft-Ex + "px";
	}

	function closeDragElement() {
		El.ontouchend = null;
		El.ontouchmove = null;
	}
}
