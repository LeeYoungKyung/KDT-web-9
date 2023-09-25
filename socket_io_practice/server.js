//콘솔백에 찍히는 것
const http = require('http')
const express = require('express')
const SocketIO = require('socket.io')

const app = express()
const PORT = 8000


// HTTP서버
const server = http.createServer(app)

//socket 서버
const io = SocketIO(server)

app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('client')
})

io.on('connection',(socket)=>{
    socket.on('open_message',(arg, cb)=>{
        //arg == {name : 'client', message :"hello Server"}
        //각각의 객체의 성질 고대로 넘어옴

        console.log(arg)
        cb(arg)
    })
    socket.on("form_message",(arg,arg2,arg3)=>{
        console.log(arg,arg2,arg3)
        socket.emit("backend_message",arg)
        //socket.emit("backend_message",arg)은 하나의 서버 사용
        //io.emit("backend_message",arg)은 여러창 사용해서 가능
        

        
    })
})



//서버

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})