exports.comments =()=>{
    const id = 'kdt9';
    const pw = '1234';
    if (id === req.body.username && pw === req.body.password) {
        res.send({ result: true, userInfo: req.body });
    } else {
        res.send({ result: false, userInfo: null });
    }
}

const mysql = require('mysql');

