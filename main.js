var hex_values = Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');

function pickColour() {
    var item = "";
    var i;
    for (i=0; i < 6; i++) {
        item = item + hex_values[Math.floor(Math.random() * hex_values.length)];
    }
    var hex = "HEX CODE: #" + item;
    hex_code = "#" + item;
    document.body.style.backgroundColor = hex_code;
    document.getElementById("hex_value").innerHTML = hex;
}