let newElement = document.createElement('a');
newElement.href = 'http://example.com';
newElement.textContent = 'we are ready';

let firstParagraph = document.querySelector('p');
firstParagraph.append(newElement);

//remove elements

let firstH1Element = document.querySelector('h1');

firstH1Element.remove();

//Move elements
firstParagraph.parentElement.append(firstParagraph);

//innerHTML
firstParagraph.innerHTML = 'Hi this is <strong>important</strong>'