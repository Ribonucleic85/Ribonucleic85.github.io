function dragElement(grabbed, movingEl) {
	if (grabbed.getAttribute("dragActive")!=null)
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
		grabbed.setAttribute("dragActive","");
		touchXY(e);
		grabbed.ontouchmove = elementDrag;
	}

	function elementDrag(e) {
		// ontouchend causes problems when new touches are used this solves that problem
		if (e.changedTouches.length<1)
			touchNull();
		Ex = Mx-e.targetTouches[0].pageX;
		Ey = My-e.targetTouches[0].pageY;
		touchXY(e);
		movingEl.style.top = movingEl.offsetTop-Ey + "px";
		movingEl.style.left = movingEl.offsetLeft-Ex + "px";
		e = eventControl(e);
	}

	function touchNull() {
		grabbed.removeAttribute("dragActive");
		grabbed.ontouchmove = null;
	}
}
