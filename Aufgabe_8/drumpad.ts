
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

setInterval(function() {

 }, 500);
 
let sounds = [];
sounds[0] = new Audio("L08_task_material_assets_DrumPad_A.mp3");
sounds[1] = new Audio("L08_task_material_assets_DrumPad_C.mp3");
sounds[2] = new Audio("L08_task_material_assets_DrumPad_F.mp3");
sounds[3] = new Audio("L08_task_material_assets_DrumPad_G.mp3");
sounds[4] = new Audio("L08_task_material_assets_DrumPad_hihat.mp3");
sounds[5] = new Audio("L08_task_material_assets_DrumPad_kick.mp3");
sounds[6] = new Audio("L08_task_material_assets_DrumPad_laugh-1.mp3");
sounds[7] = new Audio("L08_task_material_assets_DrumPad_laugh-2.mp3");
sounds[8] = new Audio("L08_task_material_assets_DrumPad_snare.mp3");

let beatfolge = [];
beatfolge[0] = sounds[5];
beatfolge[1] = sounds[8];
beatfolge[2] = sounds[4];

function playSample(sound:HTMLAudioElement){     

    sound.play();
}
window.addEventListener("load", function(){
document.querySelector(".drum1").addEventListener("click", function () { playSample(sounds[0]) });
})