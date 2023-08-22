let numberOfDrumButtons = document.querySelectorAll(".drum").length;
// find first button in doc and add event listener to the button
for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener('click', function () {

    let buttonInnerHTML = this.innerHTML;
    // What to do when a click is detected
    switch (buttonInnerHTML) {

      case 'w':
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case 'a':
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case 's':
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case 'd':
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case 'j':
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case 'k':
        let kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;

      case 'l':
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;


      default:
      // Handle any other cases or do nothing
    }

  });
}

