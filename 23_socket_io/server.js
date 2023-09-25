const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;

const server = http.createServer(app);
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('chat');
});

io.on('connection', (socket) => {

    // 소켓 아이디값 나옴
    console.log('조인 전', socket.rooms);
    socket.on('join', (room) => {
       // 채팅방 생성 -> join() 사용 
       // 조인은 방을 생성하면서 그 방이 존재하면 거기로 접속
      socket.join(room); 
      socket.room = room;
      console.log('조인 후', socket.rooms);
      // 나를 제외한 전체사용자에게 메세지 전달
      socket.broadcast.to(room).emit('create', `${[...socket.rooms][0]}님이 입장하였습니다`);
      // set 길이 -> size
      const roomInfo = io.sockets.adapter.rooms.get(room);
      //console.log(io.sockets.adapter);
      console.log(roomInfo?.size);
    });

    socket.on('sendMessage', (message) => {
        // io.to(특정방 id).emit(이벤트) -> 특정방의 전체 사용자들에게 메세지 전달
        // io.to(socket.room).emit('chat', message);
        socket.broadcast.to(socket.room).emit('chat', message);
    });

    socket.on('leave', () => {
        socket.leave(socket.room);
        console.log(`남은인원: ${io.sockets.adapter.rooms.get(socket.room)?.size}`);
    });
    
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});