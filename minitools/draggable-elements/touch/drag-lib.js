// for simplicity function names will
// stay the same till out of beta

function dragElement(grabbed,movingEl) {
	var Ex = 0
	,   Ey = 0
	,   Mx = 0
	,   My = 0;
	
	movingEl = movingEl || grabbed; //if movingEl is not supplied then set it to grabbed
	// was onmousedown
	grabbed.ontouchstart = dragMouseDown;

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

		grabbed.ontouchend = closeDragElement; // onmouseup
		grabbed.ontouchmove = elementDrag; // onmousemove
	}

	function elementDrag(e) {
		e = eventControl(e);

		Ex = Mx-e.targetTouches[0].pageX; // e.clientX;
		Ey = My-e.targetTouches[0].pageY; // e.clientY;
		mouseXY(e);

		movingEl.style.top = grabbed.offsetTop-Ey + "px";
		movingEl.style.left = grabbed.offsetLeft-Ex + "px";
	}

	function closeDragElement() {
		grabbed.ontouchend = null;
		grabbed.ontouchmove = null;
	}
}
