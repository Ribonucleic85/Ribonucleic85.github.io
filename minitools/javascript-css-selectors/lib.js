function sel(q) {
  return document.querySelectorAll(q);
}

function rSel(e,q) {
  return e.querySelectorAll(q);
}

Element.prototype.rSel = function(q) {
  return this.querySelectorAll(q);
}
