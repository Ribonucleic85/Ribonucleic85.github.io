byId = (i) => { return document.getElementById(i); }

/*
mon   base stats a / d / s
"Ralts",79, 59, 99
"Kirlia",117,90,116
"Gardevoir",237,195,169
"Gallade",237,195,169
*/

calcCPs = () => {
	var i = 0,
	A = ( +byId('baseAtt').value + +byId('ivAtt').value ),
	D = ( +byId('baseDef').value + +byId('ivDef').value )**2,
	S = ( +byId('baseSta').value + +byId('ivSta').value )**2;

	for (; i<79; i+=2)
		byId('cpList').value += (i/0.5) +": "+ (A*D*S*CPM2[i/0.5]/10) +",\t"
}
