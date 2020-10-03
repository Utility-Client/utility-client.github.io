document.getElementById('add').onclick = function(ev) {
    var name = prompt("Enter a name for macro:");
    var command = prompt("Enter the chat message/command, that should be executed:");
    var keybind = prompt("Enter the key-code the macro should use:");

    var output = document.getElementById('output').innerText;

    document.getElementById('output').innerText = `${output}${name}:${command}:${keybind}\n`;
}