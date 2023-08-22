// Get the total number of buttons with class "drum"
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Add click event listeners to the drum buttons
for (let i = 0; i < numberOfDrumButtons; i++) {
  // Detect button click
  document.querySelectorAll(".drum")[i].addEventListener('click', function () {
    // Get the clicked button's text
    let buttonInnerHTML = this.innerHTML;
    // Play the corresponding sound
    makeSound(buttonInnerHTML);
  });
}

// Check for key press events
document.addEventListener('keypress', function (event) {
  // Play a sound based on the pressed key
  makeSound(event.key);
});

// Play a sound according to the given key
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
    // Ignore other keys
  }
}

// Play an audio file
function playSound(soundFile) {
  let audio = new Audio(soundFile);
  audio.play();
}
