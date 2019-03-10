var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('public'))

var server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log("New Client: " + socket.id);
    
    socket.on('mouse', mouseMsg);

    function mouseMsg(data){
        socket.broadcast.emit('mouse', data);
        console.log(data);
    }
}