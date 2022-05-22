import '../../sass/main.scss';
const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

addDisabledAtr(refs.stopBtn);
let timerId;
refs.startBtn.addEventListener('click', onClickStartColorChange);

refs.stopBtn.addEventListener('click', onClickStopColorChange);

function onClickStartColorChange() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  removeDisabledAtr(refs.stopBtn);
  addDisabledAtr(refs.startBtn);
}

function onClickStopColorChange() {
  clearInterval(timerId);

  removeDisabledAtr(refs.startBtn);
  addDisabledAtr(refs.stopBtn);
}

function addDisabledAtr(linkOnBtn) {
  linkOnBtn.setAttribute('disabled', 'disabled');
}

function removeDisabledAtr(linkOnBtn) {
  linkOnBtn.removeAttribute('disabled', 'disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
