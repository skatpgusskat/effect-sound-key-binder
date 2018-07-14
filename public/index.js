const airhorn = document.getElementById("airhorn");
airhorn.volume = 0.2;

function onF6() {
  console.log('f6');
  if (!airhorn.paused) {
    airhorn.pause();
    airhorn.currentTime = 0;
  }

  airhorn.play();
}
