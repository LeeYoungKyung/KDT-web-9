const express = require('express');
const app = express();
const db= require('./models')
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리
const router = require('./routes/main');
app.use('/', router);

//오류처리
app.use('*', (req, res) => {
    res.status(404).render('404');
});

//db싱크
//force:flase(default)테이블ㅇ 존재하는 패스 , 없으면 생성
db.sequelize.sync({forcd : true}).then(()=>{
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
})

