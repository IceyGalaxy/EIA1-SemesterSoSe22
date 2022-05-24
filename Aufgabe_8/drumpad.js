const drum1 = document.querySelector('.drum1');
const drum2 = document.querySelector('.drum2');
const drum3 = document.querySelector('.drum3');
const drum4 = document.querySelector('.drum4');
const drum5 = document.querySelector('.drum5');
const drum6 = document.querySelector('.drum6');
const drum7 = document.querySelector('.drum7');
const drum8 = document.querySelector('.drum8');
const drum9 = document.querySelector('.drum9');
const playstop = document.querySelector('.play');
var playButtonStyle = document.getElementById("play");
setInterval(function () {
}, 500);
let sounds = [];
sounds[0] = new Audio('assets/Drumpad_A.mp3');
sounds[1] = new Audio('assets/DrumPad_C.mp3');
sounds[2] = new Audio('assets/DrumPad_F.mp3');
sounds[3] = new Audio('assets/DrumPad_G.mp3');
sounds[4] = new Audio('assets/DrumPad_hihat.mp3');
sounds[5] = new Audio('assets/DrumPad_kick.mp3');
sounds[6] = new Audio('assets/DrumPad_laugh1.mp3');
sounds[7] = new Audio('assets/DrumPad_laugh2.mp3');
sounds[8] = new Audio('assets/DrumPad_snare.mp3');
let beatfolge = [];
beatfolge[0] = sounds[5];
beatfolge[1] = sounds[8];
beatfolge[2] = sounds[4];
function playSample(sound) {
    sound.play();
}
window.addEventListener("load", function () {
    document.querySelector(".drum1").addEventListener("click", function () { playSample(sounds[0]); });
    document.querySelector(".drum2").addEventListener("click", function () { playSample(sounds[1]); });
    document.querySelector(".drum3").addEventListener("click", function () { playSample(sounds[2]); });
    document.querySelector(".drum4").addEventListener("click", function () { playSample(sounds[3]); });
    document.querySelector(".drum5").addEventListener("click", function () { playSample(sounds[4]); });
    document.querySelector(".drum6").addEventListener("click", function () { playSample(sounds[5]); });
    document.querySelector(".drum7").addEventListener("click", function () { playSample(sounds[6]); });
    document.querySelector(".drum8").addEventListener("click", function () { playSample(sounds[7]); });
    document.querySelector(".drum9").addEventListener("click", function () { playSample(sounds[8]); });
});
//# sourceMappingURL=drumpad.js.map