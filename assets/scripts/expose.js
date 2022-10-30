// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn = document.getElementById('horn-select');
  const image = document.querySelector('img');
  const audio = document.querySelector('audio');
  const button = document.querySelector('button');
  const slider = document.getElementById('volume');
  const volumeIcon = document.getElementById('volume-controls').querySelector('img');

  // update horn image and audio when changing selections
  horn.addEventListener('change', (event) => {
    if(horn.value == 'air-horn'){
      image.src = './assets/images/air-horn.svg';
      audio.src = './assets/audio/air-horn.mp3';
    }
    else if(horn.value == 'car-horn'){
      image.src = './assets/images/car-horn.svg';
      audio.src = './assets/audio/car-horn.mp3';
    }
    else if(horn.value == 'party-horn'){
      image.src = './assets/images/party-horn.svg';
      audio.src = './assets/audio/party-horn.mp3';
    }
    else{
      image.src = 'assets/imges/no-image.png';
      audio.src = '';
    }
  });

  // update volume icon, volume, when sliding the slider
  slider.addEventListener('change', (event) =>{
    let v = slider.value;
    // update volume
    audio.volume = v/100;

    // update volume icon
    if(v == 0){
      volumeIcon.src = './assets/icons/volume-level-0.svg';
    }
    else if(v < 33){
      volumeIcon.src = './assets/icons/volume-level-1.svg';
    }
    else if(v < 66){
      volumeIcon.src = './assets/icons/volume-level-2.svg';
    }
    else {
      volumeIcon.src = './assets/icons/volume-level-3.svg';
    }
  });

  const jsConfetti = new JSConfetti();

  button.addEventListener('click',(event) => {
    audio.play();

    if(horn.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  });

}