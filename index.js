$(document).ready(function () {
  // Attach click event handlers to elements with the class 'drum'
  $('.drum').click(function () {
    const buttonInnerHTML = $(this).data('key');
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

  // Attach keypress event handler to the entire document
  $(document).keypress(function (event) {
    const key = String.fromCharCode(event.which).toLowerCase();
    makeSound(key);
    buttonAnimation(key);
  });

  function makeSound(key) {
    const soundMap = {
      'w': 'sounds/tom-1.mp3',
      'a': 'sounds/tom-2.mp3',
      's': 'sounds/tom-3.mp3',
      'd': 'sounds/tom-4.mp3',
      'j': 'sounds/crash.mp3',
      'k': 'sounds/kick-bass.mp3',
      'l': 'sounds/snare.mp3'
    };

    const soundFile = soundMap[key];
    if (soundFile) {
      playSound(soundFile);
    }
  }

  function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }

  function buttonAnimation(currentKey) {
    const activeButton = $('.' + currentKey);

    if (activeButton.length) {
      activeButton.addClass('pressed');
      setTimeout(function () {
        activeButton.removeClass('pressed');
      }, 100);
    }
  }
});
