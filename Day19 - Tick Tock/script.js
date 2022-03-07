const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const time = new Date()
const date = time.getDate();
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()
setInterval(setTime, 1000)

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggle.textContent = 'Dark Mode';
    } else {
        html.classList.add('dark');
        toggle.textContent = 'Light Mode';
    }
})

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const hour = time.getHours()
    const hours = hour % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

}