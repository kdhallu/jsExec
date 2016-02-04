var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/reciever', function(req, res){
  res.sendFile(__dirname + '/receiver.html');
});

app.get('/sender', function(req, res){
  res.sendFile(__dirname + '/sender.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('chat response', function(msg){
    io.emit('chat response', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
