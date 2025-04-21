function showMessage() {
    let nameInputElement = document.getElementById('nameInput');
    let name = nameInputElement.value;

    let outputElement = document.getElementById('output');
    outputElement.innerText = 'Hello ' + name + '!';
}

