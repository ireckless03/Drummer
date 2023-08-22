let numberOfDrumButtons = document.querySelectorAll(".drum").length
// find first button in doc and adds event listener to button
for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener('click', function () {
    alert('I got clicked!');
    
    // What to do when click detected
    let audio = new Audio("sounds/tom-1.mp3")
    audio.play();
  
  });
}
