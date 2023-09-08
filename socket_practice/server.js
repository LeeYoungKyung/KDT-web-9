const http = require('http')
const ws = require('ws');
const express = require('express');
const app = express();
//http서버
const server = http.createServer(app)
//웹서버

//웹소켓 서버 접속
const wss = new ws.Server({ server });

const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});


//투표결과 초기화 변수
const votes = {
    typeOne: 0,
    typeTwo: 0,
};


//socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
    socket.send(JSON.stringify(votes));
    socket.on('message', (message) => {
        //parse 구문해석
        const parse = JSON.parse(message);
        //message라는 문자열을 JSON 형식으로 파싱
        console.log(parse);
        votes[parse.vote]++; //1씩증가
        wss.clients.forEach((client) => {
            client.send(JSON.stringify(votes));
        });
    });
    //오류이벤트
    socket.on('error', (err) => {
        console.log('에러가 발생하였습니다', err);
    });
    //접속종료이벤트
    socket.on('close', () => {
        console.log('클라이언트와 연결이 종료됨');
    });
});
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    //express서버로 직접 접근하는거보다 확장성과 http를 생각해서 
    //분리하는것이 좋음
});

//오류를 막기 위해서 웹서버랑 http를 분리시켜줌
