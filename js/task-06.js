const inputRef = document.querySelector('#validation-input');
function onInputBlur() {
    event.currentTarget.value.length === +inputRef.dataset.length ? inputRef.classList.add('valid') : inputRef.classList.add('invalid');
}
inputRef.addEventListener('blur', onInputBlur);





