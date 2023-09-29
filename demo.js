const productNameInputElement = document.getElementById('product-name');
const remainingCharElement = document.getElementById("remaining-chars");

const maxAllowedchar = productNameInputElement.maxLength;

function updateRemainingChars(event) {
    const text = event.target.value;
    const enterTextLength = text.length;

    const remainingChars = maxAllowedchar - enterTextLength;

    remainingCharElement.textContent = remainingChars;

    if (remainingChars === 0) {
        remainingCharElement.classList.add('error');
        productNameInputElement.classList.add('error');
    } else if (remainingChars <= 10) {
        remainingCharElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
        remainingCharElement.classList.remove('error');
        productNameInputElement.classList.remove('error');
    } else {
        remainingCharElement.classList.remove('warning');
        productNameInputElement.classList.remove('warning');
    }
}

productNameInputElement.addEventListener('input', updateRemainingChars);