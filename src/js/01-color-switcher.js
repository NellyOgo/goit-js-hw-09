function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let intervalId;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;

  const promise = new Promise((resolve, reject) => {
    intervalId = setInterval(() => {
      const color = getRandomHexColor();
      body.style.backgroundColor = color;
      resolve(color);
    }, 1000);
  });

  promise
    .then(color => {
      console.log('Background color changed to:', color);
    })
    .catch(error => {
      console.error('Error occurred:', error);
    });
});

stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(intervalId);
});