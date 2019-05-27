const express = require('express');
const socket=require('socket.io');
var app =express();


var server = app.listen(3000,function(){
    console.log('listening to 3000');
});



app.use(express.static('public'));



var io = socket(server);

io.on('connection', function (socket) {
    
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);//io.sockets=all the sockets connects to this server including the sender
    });

    socket.on('typing',function(data){
       socket.broadcast.emit('typing',data);//io.broadcast=all the sockets connects to this server except sender
    });
    
});