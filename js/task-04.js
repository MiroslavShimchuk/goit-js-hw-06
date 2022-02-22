let counterValue = 0;

const decrementBtn = document.querySelector('#counter button:first-child');
decrementBtn.addEventListener('click', onDecrementBtn);

const incrementBtn = document.querySelector('#counter button:last-child');
incrementBtn.addEventListener('click', onIncrementBtn);

const counterValueEl = document.querySelector('#value')

function onDecrementBtn () {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
    // console.log(counterValue);
}

function onIncrementBtn () {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
    // console.log(counterValue);
}


