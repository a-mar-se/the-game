// Initialize the program

const startButton = document.querySelector('.startButton');
const startButtonContainer = document.querySelector('.startButtonContainer');
function init() {
  // startButtonContainer.classList.add('startButtonContainer');
  // startButton.classList.add('startButton');
  // startButton.innerHTML = 'Start';
  // const doby = document.querySelector('body');

  // startButtonContainer.appendChild(startButton);

  // doby.appendChild(startButtonContainer);
  // console.log('Starting environment');
  // const startButton = document.querySelector('.startButton');
  // const startButtonContainer = document.querySelector('.startButtonContainer');

  // Click the button or press "Enter" or "SpaceBar" to start
  startButton.addEventListener('click', execGame);
  window.addEventListener('keydown', handleKeyPress);

  function handleKeyPress(event) {
    const key = event.key; //

    if (key == 'Enter' || key == ' ') {
      execGame();
    }
  }
  function execGame() {
    window.location.href = './level1.html';

    // startButton.removeEventListener('click', execGame);
    // startButton.removeEventListener('keydown', handleKeyPress);

    // startButtonContainer.classList.remove('startButtonContainer');
    // startButton.classList.remove('startButton');
    // startButton.remove();
    // startButtonContainer.remove();
    // initGame();
  }
}

document.addEventListener('DOMContentLoaded', init);
