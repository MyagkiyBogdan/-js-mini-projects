import '../../sass/main.scss';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const collectionEl = document.querySelector('#boxes');

const inputEl = document.querySelector('input');

const createBtnEl = document.querySelector('[data-create]');

const destroyBtnEl = document.querySelector('[data-destroy]');

collectionEl.style.display = 'flex';
collectionEl.style.justifyContent = 'center';
collectionEl.style.alignItem = 'center';
collectionEl.style.flexWrap = 'wrap';
collectionEl.style.margin = '-15px';
collectionEl.style.marginTop = '15px';

function createBoxes(amount) {
  let startBoxSize = 20;
  for (let i = 0; i < amount; i++) {
    startBoxSize += 10;
    collectionEl.insertAdjacentHTML(
      'beforeend',
      `<div style='background-color: ${getRandomHexColor()}; width: ${startBoxSize}px; height: ${startBoxSize}px; margin: 15px'></div>`,
    );
  }
}

createBtnEl.addEventListener('click', onClickCreateCollection);

function onClickCreateCollection() {
  const amountCollection = inputEl.value;
  if (amountCollection > 100) {
    alert('We can create only 100 elements, not more, sorry ;(');
  } else {
    createBoxes(amountCollection);
  }
}

destroyBtnEl.addEventListener('click', onClickClearColection);

function onClickClearColection() {
  collectionEl.innerHTML = '';
}
