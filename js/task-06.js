const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', removeFocusInput);

function removeFocusInput() {
    if (inputEl.value.length < inputEl.dataset.length) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');      
    }  
}