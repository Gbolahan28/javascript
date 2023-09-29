//document.body.children[1].children[0].href = 'https://www.google.com';

// let anchorElement = document.getElementById('external');
// anchorElement.href = 'http://www.google.com';


let hElement = document.body.firstElementChild;
hElement = document.body.children[0];

console.dir(hElement);

console.dir(hElement.parentElement);

console.dir(hElement.nextElementSibling);

hElement = document.getElementById('first-title');
console.dir(hElement);

let paramint = document.querySelector('.para');

console.dir(paramint);

paramint.textContent = 'this was changed by Sir Gboli';