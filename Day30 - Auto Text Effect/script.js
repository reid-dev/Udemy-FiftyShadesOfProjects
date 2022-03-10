const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = "Quoth the Raven — nevermore!"
let index = 1;
let speed = 300 / speedEl.value;

writeText()

function writeText() {
    textEl.innerText = text.slice(0, index);
    index++;
    if (index > text.length) {
        index = 1;
    }
    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', function (e) {
    speed = 300 / e.target.value;
});