var template = "<div id=\"IDHERE\"class=\"macro\"> <center> <input type = \"text\" class=\"macrocontent\"> <input type=\"text\" class=\"macrocontent\"> <input type=\"number\" class=\"numinput macrocontent\"> <button id=\"delSelf\" class=\"macrocontent\">X</button></center> </div>";
var macros = document.getElementById('macros');

document.getElementById('add').onclick = function(ev) {
    document.getElementById('macros').innerHTML = document.getElementById('macros').innerHTML + template.replace("IDHERE", "0");
}