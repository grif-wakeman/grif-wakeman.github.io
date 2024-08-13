
// waveform Gradient

const ctx = document.createElement('canvas').getContext('2d')
const gradient = ctx.createLinearGradient(150, 0, 500, 150)
gradient.addColorStop(.1, "#f3a9ff");
gradient.addColorStop(.7, "#83bcff");

const green = "#007E7F";



// Get elements

playBtn = document.getElementById("playBtn");
playBtn2 = document.getElementById("playBtn2");
playBtn3 = document.getElementById("playBtn3");
playBtn4 = document.getElementById("playBtn4");
playBtn5 = document.getElementById("playBtn5");
playBtn6 = document.getElementById("playBtn6");
playBtn7 = document.getElementById("playBtn7");
playBtn8 = document.getElementById("playBtn8");
playBtn9 = document.getElementById("playBtn9");
playBtn10 = document.getElementById("playBtn10");
playBtn11 = document.getElementById("playBtn11");
playBtn12 = document.getElementById("playBtn12");



//Create Waveforms

let wavesurfer = WaveSurfer.create({
    container: '#waveform1',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer.load("audio/Octane Pump (Instrumental) by Flux-Eon Pepsi 2.mp3");

var wavesurfer2 = WaveSurfer.create({
    container: '#waveform2',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer2.load("audio/Make Your Move by Velvet Riot Adobe 5.mp3");

var wavesurfer3 = WaveSurfer.create({
    container: '#waveform3',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer3.load("audio/Jump On It (feat Dream Boii) by Model Rawkiss Google 6.mp3");

var wavesurfer4 = WaveSurfer.create({
    container: '#waveform4',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer4.load("audio/Boss It Up (feat. Lio Rocki) by Fruity CBS 4.mp3");

var wavesurfer5 = WaveSurfer.create({
    container: '#waveform5',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer5.load("audio/Leap feat. Jayy Starr by VIP Meta 10.mp3");

var wavesurfer6 = WaveSurfer.create({
    container: '#waveform6',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer6.load("/audio/Go Go Go by 2SOLER.mp3");

var wavesurfer7 = WaveSurfer.create({
    container: '#waveform7',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer7.load("audio/Jungle Electric (Instrumental) by BZRRK.mp3");

var wavesurfer8 = WaveSurfer.create({
    container: '#waveform8',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer8.load("audio/Cartoon Hellstorm (Instrumental) by Gekkor.mp3");

var wavesurfer9 = WaveSurfer.create({
    container: '#waveform9',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer9.load("audio/Green Light by Jetpack Panda.mp3");

var wavesurfer10 = WaveSurfer.create({
    container: '#waveform10',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer10.load("audio/Everybody Go by KittyGun.mp3");

var wavesurfer11 = WaveSurfer.create({
    container: '#waveform11',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer11.load("audio/This Look Good feat. Lio Rocki by LimeRickyy.mp3");

var wavesurfer12 = WaveSurfer.create({
    container: '#waveform12',
    waveColor: '#d5d5d5',
    progressColor: green,
    cursorColor: '#0d0d0d',
    cursorWidth: 0,
    cursorHeight: .5,
    barWidth: 1,
    barHeight: .25,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    minPxPerSec: 20
});
wavesurfer12.load("audio/Goes Like This feat. Wav Haven by LimeRickyy.mp3");

//Play/Pause Functions

playBtn.onclick = function(){
    wavesurfer.playPause();
    if(playBtn.src.match("play")){
        playBtn.src  = "./assets/pause.png";
        wavesurfer2.pause();
        playBtn2.src = "./assets/play.png";
        wavesurfer3.pause();
        playBtn3.src = "./assets/play.png";
        wavesurfer4.pause();
        playBtn4.src = "./assets/play.png";
        wavesurfer5.pause();
        playBtn5.src = "./assets/play.png";
        wavesurfer6.pause();
        playBtn6.src = "./assets/play.png";
        wavesurfer7.pause();
        playBtn7.src = "./assets/play.png";
        wavesurfer8.pause();
        playBtn8.src = "./assets/play.png";
        wavesurfer9.pause();
        playBtn9.src = "./assets/play.png";
        wavesurfer10.pause();
        playBtn10.src = "./assets/play.png";
        wavesurfer11.pause();
        playBtn11.src = "./assets/play.png";
        wavesurfer12.pause();
        playBtn12.src = "./assets/play.png";
    }
    else{
        playBtn.src = "./assets/play.png"
    }
}
playBtn2.onclick = function(){
    wavesurfer2.playPause();
    if(playBtn2.src.match("play")){
        playBtn2.src  = "./assets/pause.png";
        wavesurfer.pause();
        playBtn.src = "./assets/play.png";
        wavesurfer3.pause();
        playBtn3.src = "./assets/play.png";
        wavesurfer4.pause();
        playBtn4.src = "./assets/play.png";
        wavesurfer5.pause();
        playBtn5.src = "./assets/play.png";
        wavesurfer6.pause();
        playBtn6.src = "./assets/play.png";
        wavesurfer7.pause();
        playBtn7.src = "./assets/play.png";
        wavesurfer8.pause();
        playBtn8.src = "./assets/play.png";
        wavesurfer9.pause();
        playBtn9.src = "./assets/play.png";
        wavesurfer10.pause();
        playBtn10.src = "./assets/play.png";
        wavesurfer11.pause();
        playBtn11.src = "./assets/play.png";
        wavesurfer12.pause();
        playBtn12.src = "./assets/play.png";
    }
    else{
        playBtn2.src = "./assets/play.png"
    }
}
playBtn3.onclick = function(){
    wavesurfer3.playPause();
    if(playBtn3.src.match("play")){
        playBtn3.src  = "./assets/pause.png";
        wavesurfer.pause();
        playBtn.src = "./assets/play.png";
        wavesurfer2.pause();
        playBtn2.src = "./assets/play.png";
        wavesurfer4.pause();
        playBtn4.src = "./assets/play.png";
        wavesurfer5.pause();
        playBtn5.src = "./assets/play.png";
        wavesurfer6.pause();
        playBtn6.src = "./assets/play.png";
        wavesurfer7.pause();
        playBtn7.src = "./assets/play.png";
        wavesurfer8.pause();
        playBtn8.src = "./assets/play.png";
        wavesurfer9.pause();
        playBtn9.src = "./assets/play.png";
        wavesurfer10.pause();
        playBtn10.src = "./assets/play.png";
        wavesurfer11.pause();
        playBtn11.src = "./assets/play.png";
        wavesurfer12.pause();
        playBtn12.src = "./assets/play.png";
    }
    else{
        playBtn3.src = "./assets/play.png"
    }
}
playBtn4.onclick = function(){
    wavesurfer4.playPause();
    if(playBtn4.src.match("play")){
        playBtn4.src  = "./assets/pause.png";
        wavesurfer.pause();
        playBtn.src = "./assets/play.png";
        wavesurfer2.pause();
        playBtn2.src = "./assets/play.png";
        wavesurfer3.pause();
        playBtn3.src = "./assets/play.png";
        wavesurfer5.pause();
        playBtn5.src = "./assets/play.png";
        wavesurfer6.pause();
        playBtn6.src = "./assets/play.png";
        wavesurfer7.pause();
        playBtn7.src = "./assets/play.png";
        wavesurfer8.pause();
        playBtn8.src = "./assets/play.png";
        wavesurfer9.pause();
        playBtn9.src = "./assets/play.png";
        wavesurfer10.pause();
        playBtn10.src = "./assets/play.png";
        wavesurfer11.pause();
        playBtn11.src = "./assets/play.png";
        wavesurfer12.pause();
        playBtn12.src = "./assets/play.png";
    }
    else{
        playBtn4.src = "./assets/play.png"
    }
}
playBtn5.onclick = function(){
    wavesurfer5.playPause();
    if(playBtn5.src.match("play")){
        playBtn5.src  = "./assets/pause.png";
        wavesurfer.pause();
        playBtn.src = "./assets/play.png";
        wavesurfer2.pause();
        playBtn2.src = "./assets/play.png";
        wavesurfer3.pause();
        playBtn3.src = "./assets/play.png";
        wavesurfer4.pause();
        playBtn4.src = "./assets/play.png";
        wavesurfer6.pause();
        playBtn6.src = "./assets/play.png";
        wavesurfer7.pause();
        playBtn7.src = "./assets/play.png";
        wavesurfer8.pause();
        playBtn8.src = "./assets/play.png";
        wavesurfer9.pause();
        playBtn9.src = "./assets/play.png";
        wavesurfer10.pause();
        playBtn10.src = "./assets/play.png";
        wavesurfer11.pause();
        playBtn11.src = "./assets/play.png";
        wavesurfer12.pause();
        playBtn12.src = "./assets/play.png";
    }
    else{
        playBtn5.src = "./assets/play.png"
    }
}
playBtn6.onclick = function(){
    wavesurfer6.playPause();
    if(playBtn6.src.match("play")){
        playBtn6.src  = "./assets/pause.png";
        wavesurfer.pause();
        playBtn.src = "./assets/play.png";
        wavesurfer2.pause();
        playBtn2.src = "./assets/play.png";
        wavesurfer3.pause();
        playBtn3.src = "./assets/play.png";
        wavesurfer4.pause();
        playBtn4.src = "./assets/play.png";
        wavesurfer5.pause();
        playBtn5.src = "./assets/play.png";
        wavesurfer7.pause();
        playBtn7.src = "./assets/play.png";
        wavesurfer8.pause();
        playBtn8.src = "./assets/play.png";
        wavesurfer9.pause();
        playBtn9.src = "./assets/play.png";
        wavesurfer10.pause();
        playBtn10.src = "./assets/play.png";
        wavesurfer11.pause();
        playBtn11.src = "./assets/play.png";
        wavesurfer12.pause();
        playBtn12.src = "./assets/play.png";
    }
    else{
        playBtn6.src = "./assets/play.png"
    }
}
playBtn7.onclick = function(){
    wavesurfer7.playPause();
    if(playBtn7.src.match("play")){
        playBtn7.src  = "./assets/pause.png";
        wavesurfer.pause();
        playBtn.src = "./assets/play.png";
        wavesurfer2.pause();
        playBtn2.src = "./assets/play.png";
        wavesurfer3.pause();
        playBtn3.src = "./assets/play.png";
        wavesurfer4.pause();
        playBtn4.src = "./assets/play.png";
        wavesurfer5.pause();
        playBtn5.src = "./assets/play.png";
        wavesurfer6.pause();
        playBtn6.src = "./assets/play.png";
        wavesurfer8.pause();
        playBtn8.src = "./assets/play.png";
        wavesurfer9.pause();
        playBtn9.src = "./assets/play.png";
        wavesurfer10.pause();
        playBtn10.src = "./assets/play.png";
        wavesurfer11.pause();
        playBtn11.src = "./assets/play.png";
        wavesurfer12.pause();
        playBtn12.src = "./assets/play.png";
    }
    else{
        playBtn7.src = "./assets/play.png"
    }
}
playBtn8.onclick = function(){
    wavesurfer8.playPause();
    if(playBtn8.src.match("play")){
        playBtn8.src  = "./assets/pause.png";
        wavesurfer.pause();
        playBtn.src = "./assets/play.png";
        wavesurfer2.pause();
        playBtn2.src = "./assets/play.png";
        wavesurfer3.pause();
        playBtn3.src = "./assets/play.png";
        wavesurfer4.pause();
        playBtn4.src = "./assets/play.png";
        wavesurfer5.pause();
        playBtn5.src = "./assets/play.png";
        wavesurfer6.pause();
        playBtn6.src = "./assets/play.png";
        wavesurfer7.pause();
        playBtn7.src = "./assets/play.png";
        wavesurfer9.pause();
        playBtn9.src = "./assets/play.png";
        wavesurfer10.pause();
        playBtn10.src = "./assets/play.png";
        wavesurfer11.pause();
        playBtn11.src = "./assets/play.png";
        wavesurfer12.pause();
        playBtn12.src = "./assets/play.png";
    }
    else{
        playBtn8.src = "./assets/play.png"
    }
}
playBtn9.onclick = function(){
    wavesurfer9.playPause();
    if(playBtn9.src.match("play")){
        playBtn9.src  = "./assets/pause.png";
        wavesurfer.pause();
        playBtn.src = "./assets/play.png";
        wavesurfer2.pause();
        playBtn2.src = "./assets/play.png";
        wavesurfer3.pause();
        playBtn3.src = "./assets/play.png";
        wavesurfer4.pause();
        playBtn4.src = "./assets/play.png";
        wavesurfer5.pause();
        playBtn5.src = "./assets/play.png";
        wavesurfer6.pause();
        playBtn6.src = "./assets/play.png";
        wavesurfer7.pause();
        playBtn7.src = "./assets/play.png";
        wavesurfer8.pause();
        playBtn8.src = "./assets/play.png";
        wavesurfer10.pause();
        playBtn10.src = "./assets/play.png";
        wavesurfer11.pause();
        playBtn11.src = "./assets/play.png";
        wavesurfer12.pause();
        playBtn12.src = "./assets/play.png";
    }
    else{
        playBtn9.src = "./assets/play.png"
    }
}
playBtn10.onclick = function(){
    wavesurfer10.playPause();
    if(playBtn10.src.match("play")){
        playBtn10.src  = "./assets/pause.png";
        wavesurfer.pause();
        playBtn.src = "./assets/play.png";
        wavesurfer2.pause();
        playBtn2.src = "./assets/play.png";
        wavesurfer3.pause();
        playBtn3.src = "./assets/play.png";
        wavesurfer4.pause();
        playBtn4.src = "./assets/play.png";
        wavesurfer5.pause();
        playBtn5.src = "./assets/play.png";
        wavesurfer6.pause();
        playBtn6.src = "./assets/play.png";
        wavesurfer7.pause();
        playBtn7.src = "./assets/play.png";
        wavesurfer8.pause();
        playBtn8.src = "./assets/play.png";
        wavesurfer9.pause();
        playBtn9.src = "./assets/play.png";
        wavesurfer11.pause();
        playBtn11.src = "./assets/play.png";
        wavesurfer12.pause();
        playBtn12.src = "./assets/play.png";
    }
    else{
        playBtn10.src = "./assets/play.png"
    }
}
playBtn11.onclick = function(){
    wavesurfer11.playPause();
    if(playBtn11.src.match("play")){
        playBtn11.src  = "./assets/pause.png";
        wavesurfer.pause();
        playBtn.src = "./assets/play.png";
        wavesurfer2.pause();
        playBtn2.src = "./assets/play.png";
        wavesurfer3.pause();
        playBtn3.src = "./assets/play.png";
        wavesurfer4.pause();
        playBtn4.src = "./assets/play.png";
        wavesurfer5.pause();
        playBtn5.src = "./assets/play.png";
        wavesurfer6.pause();
        playBtn6.src = "./assets/play.png";
        wavesurfer7.pause();
        playBtn7.src = "./assets/play.png";
        wavesurfer8.pause();
        playBtn8.src = "./assets/play.png";
        wavesurfer9.pause();
        playBtn9.src = "./assets/play.png";
        wavesurfer10.pause();
        playBtn10.src = "./assets/play.png";
        wavesurfer12.pause();
        playBtn12.src = "./assets/play.png";
    }
    else{
        playBtn11.src = "./assets/play.png"
    }
}
playBtn12.onclick = function(){
    wavesurfer12.playPause();
    if(playBtn12.src.match("play")){
        playBtn12.src  = "./assets/pause.png";
        wavesurfer.pause();
        playBtn.src = "./assets/play.png";
        wavesurfer2.pause();
        playBtn2.src = "./assets/play.png";
        wavesurfer3.pause();
        playBtn3.src = "./assets/play.png";
        wavesurfer4.pause();
        playBtn4.src = "./assets/play.png";
        wavesurfer5.pause();
        playBtn5.src = "./assets/play.png";
        wavesurfer6.pause();
        playBtn6.src = "./assets/play.png";
        wavesurfer7.pause();
        playBtn7.src = "./assets/play.png";
        wavesurfer8.pause();
        playBtn8.src = "./assets/play.png";
        wavesurfer9.pause();
        playBtn9.src = "./assets/play.png";
        wavesurfer10.pause();
        playBtn10.src = "./assets/play.png";
        wavesurfer11.pause();
        playBtn11.src = "./assets/play.png";
    }
    else{
        playBtn12.src = "./assets/play.png"
    }
}