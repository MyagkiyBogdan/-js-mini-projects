import '../../sass/main.scss';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  resetBtn: document.querySelector('[data-reset]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let intervalId;
refs.startBtn.addEventListener('click', onClickStartTimer);

refs.resetBtn.addEventListener('click', onClickResetTimer);

function onClickStartTimer() {
  const startData = new Date();
  intervalId = setInterval(() => {
    const currentData = new Date();
    const timerData = currentData - startData;
    const formatedData = convertMs(timerData);
    console.log(formatedData);
    runTimer(formatedData);
  }, 1000);
  refs.startBtn.disabled = true;
}

function runTimer(data) {
  refs.days.textContent = addLeadingZero(data.days);
  refs.hours.textContent = addLeadingZero(data.hours);
  refs.minutes.textContent = addLeadingZero(data.minutes);
  refs.seconds.textContent = addLeadingZero(data.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function onClickResetTimer() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';
  refs.seconds.textContent = '00';
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
