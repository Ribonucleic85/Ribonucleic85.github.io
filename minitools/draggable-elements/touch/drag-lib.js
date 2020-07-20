// for simplicity function names will
// stay the same till out of beta
var dragElementActive = false;

function dragElement(grabbed, movingEl) {
	if (dragElementActive)
		return;

	var Ex = 0, Ey = 0, Mx = 0, My = 0;
	
	movingEl = movingEl || grabbed; // If movingEl is not supplied then set it to grabbed.
	grabbed.ontouchstart = touchStart;

	function eventControl(e) {
		e = e || window.event;
		e.preventDefault();
		e.stopPropagation();
		return e;
	}

	function touchXY(e) {
		Mx = e.targetTouches[0].pageX;
		My = e.targetTouches[0].pageY;
	}

	function touchStart(e) {
		e = eventControl(e);
		dragElementActive = true;
		touchXY(e);
		/*grabbed.ontouchend = touchNull;*/
		grabbed.ontouchmove = elementDrag;
	}

	function elementDrag(e) {
		if (touches.length<1) touchNull(); // simulate ontouchend so that another touch can't trigger it
		Ex = Mx-e.targetTouches[0].pageX;
		Ey = My-e.targetTouches[0].pageY;
		touchXY(e);
		movingEl.style.top = movingEl.offsetTop-Ey + "px";
		movingEl.style.left = movingEl.offsetLeft-Ex + "px";

		e = eventControl(e);
	}

	function touchNull() {
		dragElementActive = false;
		/*grabbed.ontouchend = null;*/
		grabbed.ontouchmove = null;
	}
}
