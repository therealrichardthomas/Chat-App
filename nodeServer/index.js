// Node server which will handle socket.io connections

// using socket.io for multiple connections
const io = require('socket.io')(8000, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const users = {};
io.on('connection', socket => {
    
    // the user receives the new-user-joined request
    socket.on('new-user-joined', name => {
        users[socket.id] = name; // gives the new user a unique socket id to array object

        // sends user-joined event to all the other users
        socket.broadcast.emit('user-joined', name);
    });

    // the user receives the send request
    socket.on('send', message => {

        // send the receives the event 'receive' with the object passed of the message and user who sent the message
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]});
    });

    // the user receives the disconnect request
    socket.on('disconnect', message => {

        // sends the 'left' event to other users
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id]; // deletes the user from users
    });

});