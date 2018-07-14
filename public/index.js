const airhorn = document.getElementById('airhorn');
const volumeSlider = document.getElementById('volume');

function init() {
  const defaultVolume = localStorage.getItem('volume') || 0.2
  airhorn.volume = defaultVolume;
  volumeSlider.value = defaultVolume;
}

volumeSlider.oninput = function () {
  const volume = this.value;

  airhorn.volume = volume;
  localStorage.setItem('volume', volume);
};

function onF6() {
  console.log('f6');
  if (!airhorn.paused) {
    airhorn.pause();
    airhorn.currentTime = 0;
  }

  airhorn.play();
}

init();