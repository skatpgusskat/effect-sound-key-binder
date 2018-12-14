const airhorn = document.getElementById('airhorn');
const ohSimSang = document.getElementById('oh-sim-sang');
const volumeSlider = document.getElementById('volume');

function init() {
  const defaultVolume = localStorage.getItem('volume') || 0.2
  airhorn.volume = defaultVolume;
  ohSimSang.volume = volume;
  volumeSlider.value = defaultVolume;
}

volumeSlider.oninput = function () {
  const volume = this.value;

  airhorn.volume = volume;
  ohSimSang.volume = volume;
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

function onF7() {
  if (!ohSimSang.paused) {
    ohSimSang.pause();
    ohSimSang.currentTime = 0;
    return;
  }

  ohSimSang.play();
}

init();