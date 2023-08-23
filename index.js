$(document).ready(function () {
  const soundMap = {
    w: 'sounds/tom-1.mp3',
    a: 'sounds/tom-2.mp3',
    s: 'sounds/tom-3.mp3',
    d: 'sounds/tom-4.mp3',
    j: 'sounds/crash.mp3',
    k: 'sounds/kick-bass.mp3',
    l: 'sounds/snare.mp3',
  };

  $('.drum').click(function () {
    const buttonKey = $(this).data('key');
    playSound(soundMap[buttonKey]);
    buttonAnimation(buttonKey);
  });

  $(document).keypress(function (event) {
    const key = String.fromCharCode(event.which).toLowerCase();
    const soundFile = soundMap[key];
    if (soundFile) {
      playSound(soundFile);
      buttonAnimation(key);
    }
  });

  function playSound(soundFile) {
    new Audio(soundFile).play();
  }

  function buttonAnimation(currentKey) {
    const activeButton = $('.' + currentKey);

    if (activeButton.length) {
      activeButton.addClass('pressed');
      setTimeout(() => activeButton.removeClass('pressed'), 100);
    }
  }
});
