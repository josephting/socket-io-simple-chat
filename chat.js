var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
    function(err, data) {
        res.writeHead(200);
        res.end(data);
    });
}

io.on('connection', function(socket) {
    socket.on('chat', function(data) {
        io.emit('chat', data);
    });
});
