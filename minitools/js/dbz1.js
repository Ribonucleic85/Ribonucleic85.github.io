function byId(x) { return document.getElementById(x); }

function decoder(enc, num) {
  var dcd = "";
  num = parseInt(num.value);
  enc = makeArray(enc);
  enc.forEach(
    function _(value) {
      dcd += String.fromCharCode(
      parseInt(atob(value).replace(/\D/g,''))-num);
    }
  );
  return decodeURIComponent(escape(dcd));
}

function stripSource(str) {
  s = str.value;
  s = s.substring(s.indexOf('[')+1, s.indexOf(']'));
  s = s.replace(/\"/g, "");
  s = s.replace(/ /g, "");
  s = s.replace(/\n/g, "");
  s = s.replace(/\[/g, "");
  s = s.replace(/]/g, "");
  s = s.replace(/;/g, "");
  str.value = s;
}

function makeArray(str) {
  var s = str.value;
  return s.split(",");
}

function getURL(e) {
  var s = e.value;
  e.value = s.substring(
    s.indexOf("/", 0),
    s.indexOf("\"", s.indexOf("/",0)+1)
  );
}

function getNumber(s,d) {
  s = s.value.match(/\d+/g);
  d.value = s[s.length-1];
}

function epNo(n) {
  var no = parseInt(n.value);
  n.value = no+1;
  return no;
}

function uS(u) {
  if (u == undefined) return "";
  if (typeof u == "object") return u.value;
  return u;
}

function u(u) {
  return u==undefined;
}

function addLink(el,bl,sp,ei,dl) {
  var link = document.createElement('a');

  link.href = prompt("Address for link", uS(bl) + uS(sp));
  link.innerText = prompt("Episode info", uS(ei));

  if (!u(dl))
    link.setAttribute("\x64\x6F\x77\x6E\x6C\x6F\x61\x64",
    dl +" "+ uS(ei));

  el.appendChild(link);
}

// inline version:
//   onfocus="(function(t){t.select();return false})(this)"
function autoselect(t) {
  t.select();
  return false;
}
    
// incremental inline version
//   onmouseover="this.scrollBy(0,40)"
function autoscroll(t) {
  t.scrollBy(0,40);
}
