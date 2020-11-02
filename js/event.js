///Link Audio Sounds to a Variable
var clapping = document.getElementById('clap');
var kicking = document.getElementById('kick');
var snareing = document.getElementById('thesnare');
var doorknock = document.getElementById('doorknock');

///Link Buttons to Variables
var butClapping = document.getElementById('clapping');
var butKicking = document.getElementById('kicking');
var butSnareing = document.getElementById('snareing');

var bodyLoad = document.body;


window.addEventListener('load', function () {
  doorknock.play();
})

butClapping.addEventListener('click', function () {
  clapping.play();
});

butKicking.addEventListener('mouseover', function () {
  kicking.play();
});

butSnareing.addEventListener('click', function () {
  snareing.play();
});
