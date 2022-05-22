import '../../sass/main.scss';
import Notiflix from 'notiflix';

const refs = {
  firstDelay: document.querySelector('[name="delay"]'),
  stepDelay: document.querySelector('[name="step"]'),
  amountPromises: document.querySelector('[name="amount"]'),
  createBtn: document.querySelector('.btn'),
};

refs.createBtn.addEventListener('click', onBtnClickCreatePromises);

function onBtnClickCreatePromises(event) {
  event.preventDefault();

  const firstDelay = refs.firstDelay.value;
  const stepDelay = refs.stepDelay.value;
  const amountPromises = refs.amountPromises.value;

  if (amountPromises < 1) {
    Notiflix.Notify.failure(`❌ Amount must be > 1`, {
      width: '350px',
      height: '400px',
      position: 'right-top',
      clickToClose: true,
      distance: '20px',
      fontSize: '16px',
    });
    return;
  }

  let finalDelay = Number(firstDelay) - Number(stepDelay);

  for (let i = 0; i < amountPromises; i += 1) {
    finalDelay += Number(stepDelay);
    createPromise(i + 1, finalDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          width: '350px',
          height: '400px',
          position: 'right-top',
          clickToClose: true,
          distance: '20px',
          fontSize: '16px',
        });
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          width: '350px',
          height: '400px',
          position: 'right-top',
          clickToClose: true,
          distance: '20px',
          fontSize: '16px',
        });
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
