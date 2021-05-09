const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

function onDecrementClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};
function onIncrementClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

btnDecrement.addEventListener('click', onDecrementClick);
btnIncrement.addEventListener('click', onIncrementClick);
