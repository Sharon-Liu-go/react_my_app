const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const utilsToken = require('./utils/token')
const CryptoJS = require("crypto-js");
const pwdSecret = 'I_am_a_pwdSecret'

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));


//temp
let users = {};

app.post('/signup', (req, res) => {
    console.log(req)
    const { username, passward } = req.body;
    let encryptPwd = CryptoJS.AES.encrypt(passward, pwdSecret).toString();
    users[username] = {
        name: username,
        password: encryptPwd
    }
    console.log(users)
    res.send({ code: 0, msg: 'success' });
})


app.post('/login', async (req, res) => {
    const { username, passward } = req.body;
    if (!users[username]) {
        return res.send({ code: 1, msg: 'login fail' })
    }

    var bytes = CryptoJS.AES.decrypt(users[username].password, pwdSecret);
    var decryptPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (passward === decryptPassword) {
        return res.send({ code: 1, msg: 'login fail' })

    }
    const authToken = utilsToken.generateToken({ name: username })
    res.send({ code: 0, msg: 'success', data: { authToken } })

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