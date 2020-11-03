let play_pause = document.getElementById('play_pause');
let play_p = true;
let audio_player = document.getElementById('audioPlayer');
function play_pa(e){
    if(e.keyCode == 32 || e.which == 1){
        if(play_p){
            play_pause.src = "pause.svg";
            audio_player.play();
            play_p = false;
        } else{
            play_pause.src = "play.svg";
            audio_player.pause();
            play_p = true;
        }
    }
}
function audioPlayer(){
    let music_len = audio_player.duration;
    let min = 0;
    let sec = Math.round(music_len);
    while(sec >= 60){
        sec -= 60;
        min++;
    }
    console.log(min + ":" + sec);
}
audioPlayer();
function actualTime(){
    let sec = Math.round(audio_player.currentTime);
    timeline(sec);
}
function timeline(actual_sec){
    let music_len = Math.round(audio_player.duration);
    let percent = actual_sec/(music_len/100);
    console.log(percent);
    document.getElementById('inner_line').style.width = percent + "%";
}
function wheel(event){
    if(event.deltaY < 0) $("#carouselExampleControls").carousel("next");
    else $("#carouselExampleControls").carousel("prev");
}
setInterval(actualTime,1000);
function changemusic(src){
    alert(src);
}