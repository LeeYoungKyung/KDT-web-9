const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const PORT =8000

app.set('view engine','ejs')

//cookie-parser
//일반쿠키
// app.use(cookieParser())

//암호화 쿠키
app.use(cookieParser("yk"))


//쿠키 옵션객체
const cookieConfig = {
    //httpOnly : 웹 서버를 통해서만 쿠키에 접근 할 수 있다
    //자바스트립트에서 document.cookie를 이용하여 쿠키에 접속하는것을 차단

    //maxAge : 쿠키의 수명을 나타내는 것이며 밀리초 //자주씀
    //expires : 만료날짜 gmt시간으로 설정
    //path:해당 디렉토리와 하위 디렉토리에서만 경로가 활성화 되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송할 수 있다
    //즉, 쿠키가 전송될 url을 특정 가능(기본값:/)
    //domain : 쿠키가 전송될 도메인을 특정 가능(기본값:/현재 도메인)
    //secure: 웹브라우저가 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
    //signed : 쿠키의 암호화를 결정(req.signdCookies객체에 들어있음)
    httpOnly : true,
    maxAge : 60*1000,//1분
    signed : true


}




app.get('/', (req, res) => {
    res.render('index');
});

app.get('/setCookie',(req,res)=>{
    //쿠키이름,쿠키 값,옵션
    res.cookie('myCookie','myValue',cookieConfig)
    res.send('setCookie')
})
app.get('/getCookie',(req,res)=>{
    // res.send(req.cookies)
    res.send(req.signedCookies)
})
app.get('/clearCookie',(req,res)=>{
    res.clearCookie('myCookie','myValue',cookieConfig)
    res.send('clear cookie')
})




app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})