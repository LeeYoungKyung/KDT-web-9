const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});



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

module.exports = comments
