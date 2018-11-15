(()=>{var divjs = [];
m = document.createElement("div");
m.setAttribute("style", "position:absolute; bottom:10px; right:10px;");

c = document.createTextNode("Javascript Box:");
m.appendChild(c);

c = document.createElement("br");
m.appendChild(c);

c = document.createElement("textarea");
c.setAttribute("style", "width:497px; height:244px; resize:none;");
c.setAttribute("id", "jsta");
m.appendChild(c);

c = document.createElement("br");
m.appendChild(c);

c = document.createElement("input");
c.setAttribute("type", "button");
c.setAttribute("value", "Run JS");
c.setAttribute("onclick", "jsbox('jsta')");
m.appendChild(c);

document.body.appendChild(m);})()
