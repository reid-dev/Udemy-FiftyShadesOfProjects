# Day 9
## Javascript
Array to hold the names of all the sounds
```
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
```
Loop through the sounds within the array and create a button for each sound.
Set the inner text to the name of the sound and add an event listener
The event listener runs stopSongs() (explained below) and then play
the currently selceted sound.
Finally add the button to the page in the buttons div.
```
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });
    document.getElementById('buttons').appendChild(btn);
});
```
This stops the currently playing sound by pausing it and reseting the playtime to 0
```
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
```