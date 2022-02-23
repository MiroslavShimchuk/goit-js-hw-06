const changeColorBtnNode = document.querySelector('.change-color');
const bodyNode = document.querySelector('body');
const spanNode = document.querySelector('.color');

changeColorBtnNode.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyNode.style.background = color;
  spanNode.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}


// function getRandomHexColor() {
//   bodyNode.setAttribute('style', `background: #${Math.floor(Math.random() * 16777215).toString(16)}`);
//   console.log(bodyNode.getAttribute('style'));
//   spanNode.textContent = bodyNode.getAttribute('style').slice(11);
// }
