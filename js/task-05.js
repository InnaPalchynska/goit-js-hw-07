const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(ev) {
  ev.currentTarget.value === ''
    ? (outputRef.textContent = 'незнакомец')
    : (outputRef.textContent = ev.currentTarget.value);
}
