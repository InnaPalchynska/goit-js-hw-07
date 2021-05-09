const fontSizeControlRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

fontSizeControlRef.addEventListener('input', onFontSizeControlInput);
function onFontSizeControlInput() {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}