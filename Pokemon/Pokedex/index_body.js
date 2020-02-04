(()=>{
	const dexHead = n => {
		return	n==1? "Kanto - Gen 1":
			n==152? "Johto - Gen 2":
			n==252? "Hoenn - Gen 3":
			n==387? "Sinnoh - Gen 4":
			n==494? "Unova - Gen 5":
			n==650? "Kalos - Gen 6":
			n==722? "Alola - Gen 7":
			n==810? "Galar - Gen 8":
			"";
	}
	const genNo = n => {
		return n==1? 1: n==152? 2: n==252? 3: n==387? 4:
			n==494? 5: n==650? 6: n==722? 7: n==810? 8: 0
	}
	var i = 1
	,   t = "";
	for (; i<881; i++)
		t += (genNo(i)>0? "<h1>"+ dexHead(i) +"</h1>"
		+ (genNo(i)==8? "<lnbr></lnbr>Take this with a grain of salt":"")
		+ "<lnbr></lnbr>": "")
		+ "<label><input type=\"checkbox\" gen=><div><span l=\""
		+ i +"\"></span><span l=\""+ Pokemon.Dex.No(i) +"\"></span></div></label>";
	document.body.innerHTML = t;
})()
