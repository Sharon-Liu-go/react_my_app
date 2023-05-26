const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send('signup')
})

app.post('/login', (req, res) => {
    res.send({ code: 0, msg: 'success', data: { authToken: 'IamAQueen' } })
})

io.on('connection', function (socket) {
    let clientConnectCount = io.engine.clientsCount
    console.log('socket connect ', clientConnectCount)

    //2. 加入一個room聊天
    socket.on('login', (message) => {
        console.log('get a message: ', message)
        socket.emit('message', JSON.stringify({ roomNo: 'homePage', message: 'Hello there!' }))
    })

    socket.on('chat', (data) => {
        console.log('get a room and message: ', data)

        let dataParse = JSON.parse(data)
        const { roomNo } = dataParse
        if (roomNo !== 'homePage') {
            socket.broadcast.to(roomNo).emit('message', data);//傳給所有人除了自己
        }
        socket.emit('message', data) //自己也可以看到
    })

    socket.on('room', (roomNo) => {
        socket.join(roomNo, () => {
            console.log('join ' + roomNo);
        });
    })
});

http.listen(port, function () {
    console.log('listening on *:4000');
});

// app.listen(port, () => {
//     console.log(`this is on localhost:${port}/signup`)
// })