let paragraphElement = document.querySelector('p');

function changeParagraph() {
    paragraphElement.textContent = 'Clicked';
}

paragraphElement.addEventListener('click', changeParagraph);

let inputElement = document.querySelector('input');

function retrieveInput(event) {
    let enteredText = inputElement.value;
    console.log(enteredText);
    console.log(event);
}

inputElement.addEventListener('input', retrieveInput);