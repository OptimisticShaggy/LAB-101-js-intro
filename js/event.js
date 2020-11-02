var clapping = document.getElementById('clap');
var kicking = document.getElementById('kick');
var snareing = document.getElementById('thesnare');
var doorknock = document.getElementById('doorknock');

document.body.onload = function () {
  doorknock.play();
};


document.getElementById('clapping').onclick = function () {
  clapping.play(); 
};

document.getElementById('kicking').onmouseover = function () {
  kicking.play();
};


document.getElementById('snareing').onclick = function () {
  snareing.play(); 
};

