const soundButton = document.querySelector('.soundbutton');
const audio = document.querySelector('.audio');

soundButton.addEventListener('click', e => {
    soundButton.classList.toggle('paused');
    audio.paused ? audio.play() : audio.pause();
});

window.onfocus = () => {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play();
};

window.onblur = () => {
    audio.pause();
};