const makeListTa = () => {
	sl = document.createElement("textarea");

	sl.setAttribute("style", "position:fixed; top:0; left:0; height:100px; width:100px;");
	sl.setAttribute("id", "shinylist");

	document.body.appendChild(sl);
}

const getCheckedMonNames = (shinylist) => {
	var i = 0
	,   checked = 0
	,   checkee = document.getElementsByTagName("input");

	for (; i<checkee.length; i++) {
		if (checkee[i].checked) {
			checked++;
			shinylist.value += checkee[i].parentElement.getElementsByTagName("div")[0].getElementsByTagName("span")[1].getAttribute("l");
			shinylist.value += "\n"
		}
	}
}
