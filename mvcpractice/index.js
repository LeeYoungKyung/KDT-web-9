const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//임시데이터
const comments = [
    //객체의 배열 만들기
    { 
        id : 1,
        userid : 'hello',
        Date : '2023-08-05',
        comment : '안녕하세요'
    },
    {
        id : 2,
        userid : 'bye',
        Date : '2023-08-07',
        comment : 'hi'
    },
    {
        id : 3,
        userid : 'good',
        Date : '2023-08-08',
        comment : '행복하세요'
    },
    {
        id : 4,
        userid : 'luck',
        Date : '2023-08-09',
        comment : 'dinner'
    }
];


//router 분리
const router = require('./routes/main');
app.use('/', router);

//오류처리
app.use('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
