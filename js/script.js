const button = document.querySelector(".mute_unmute");
const sbar = document.querySelectorAll(".mute_unmute .sbar");
const delay = 1000;
const svol = 1;
const mvol = 0.075;

var sounds = new Howl({
  src: ['./assets/neon.wav'],
  autoplay: true,
  loop: true,
  volume: svol
});

var music = new Howl({
  src: ['./assets/SmoothJAZZ.mp3'],
  autoplay: true,
  loop: true,
  volume: mvol
});



button.addEventListener("click", () => {
  if (!sounds.playing()) {
    sounds.volume(svol);
    music.volume(mvol);
    for (let i = 0; i < sbar.length; i++) {
    sbar[i].classList.remove("noAnim");
    }

    sounds.play();
    music.play();
    console.log('play');
    
    
  } else {
    sounds.fade(svol, 0, delay);
    music.fade(mvol, 0, delay);
    setTimeout(function() {
      for (let i = 0; i < sbar.length; i++) {
      sbar[i].classList.add("noAnim");
      }
      sounds.pause();
      music.pause();
      console.log('stop')
    }, delay);
  }
});
