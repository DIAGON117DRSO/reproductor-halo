const video = document.getElementById("video");
const sonido = document.getElementById("sonido");

function retroceder() {
  video.currentTime -= 5;
  sonido.play();
}

function avanzar() {
  video.currentTime += 5;
  sonido.play();
}

function pausar() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  sonido.play();
}
