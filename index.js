let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener('click', function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener('keypress', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      playSound("sounds/tom-1.mp3");
      break;
    case 'a':
      playSound("sounds/tom-2.mp3");
      break;
    case 's':
      playSound("sounds/tom-3.mp3");
      break;
    case 'd':
      playSound("sounds/tom-4.mp3");
      break;
    case 'j':
      playSound("sounds/crash.mp3");
      break;
    case 'k':
      playSound("sounds/kick-bass.mp3");
      break;
    case 'l':
      playSound("sounds/snare.mp3");
      break;
    default:
  }
}

function playSound(soundFile) {
  let audio = new Audio(soundFile);
  audio.play();
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
