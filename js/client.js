const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');  

messageContainer.scroll = messageContainer.scrollHeight;

var audio = new Audio('ting.mp3');

const append = (message, position) => {
    const messageElement = document.createElement('div');

    messageElement.innerText = message; // user chat message
    if (position !== 'middle') {
        messageElement.classList.add('message');
    }
    messageElement.classList.add(position); // left, middle, or right

    messageContainer.append(messageElement);

    if (position === 'left') {
        audio.play();
    }
}

const username = prompt('Enter your name to join');
socket.emit("new-user-joined", username);

// user receives the 'user-joined' request
socket.on('user-joined', name => {
    append(`${name} has joined the chat`, 'middle');
});

// user receives the 'receive' request
socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, `left`);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right'); 
    socket.emit('send', message);
    messageInput.value = '';
});

socket.on('left', name => {
    append(`${name} has left the chat`, 'middle');
});

