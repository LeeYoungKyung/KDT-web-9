const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8080;

//쿠키가 ㅇㅇ 안보임 24시 24*60*60*1000
app.set('view engine', 'ejs');
// cookie
app.use(cookieParser("1214"))


const cookieConfig = {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), 
    signed: true,
}
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/modal', (req, res) => {
    res.cookie('notmore', 'not-modal', cookieConfig)
    res.send({result: true});
})

app.get('/checkCookie', (req, res) => {

    const hasCookie = req.signedCookies.notmore === 'not-modal';

    res.send({ hasCookie });
})

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})