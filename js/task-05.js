const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
function onInputChange(ev) {
        outputRef.textContent = ev.currentTarget.value
}
inputRef.addEventListener('input', onInputChange);
