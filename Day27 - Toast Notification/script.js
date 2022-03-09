const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Hello World',
    'This is a toast notification',
    'Two seconds later',
    'End of days',
    'I am a toast notification',
    'With great power'
]

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {    
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(type ? type : getRandomType());
    
    toast.innerText = message ? message : getRandomMessage();

    toasts.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function getRandomType() {
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex];
}