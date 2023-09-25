const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    //createConnection  단일 연겷할때만사용 
    //요청할때마다 새로운 연결을 생성
    //적은 수의 동시 연결이나 단순한 데이터베이스 쿼리일때 사용
    //요정이 많아지면 시간이 많이 걸린다는 단점이 있다


    //createPool 
    //연결풀을 생성, 풀은 미리 정의된 수의 연결을 생성하고 관리
    //요정이 들어오면 연결 풀에서 사용 가능한 연결을 제공, 작업완료 후 패당 연결 반환
    //연결이 필요하지 않을 경우 자동으로 반환. 풀에 연결 수를 제한하고 관리를 최적화 한다
    //다중연결 서비스에 적합하다
    //티켓팅 서버 개 쓰뤠기
    //ex) 
    
    host: 'localhost',
    user: 'yk',
    password: '1214',
    database: 'kdt9',
    port: 3306,
});

// const conn = mysql.createPool({
//     host: 'localhost',
//     user: 'yk',
//     password: '1214',
//     database: 'kdt9',
//     port: 3306,
//     connectionLimit : 30,//최대 연결 수 기본값=10
// })

//문자열 보간방법
//1.sql인젝션 공격에 취약
//2.문자열에 특수문자가 포함될 경우 오류가 발생할수도 있음

//prepared statement
//INSTER INTO user (usrid,pw,name) values (?,?,?) = 직접적으로 넣는게 아닌 간접적으로 넣는 방식

//회원가입 정보 데이터베이스 저장
const db_signup = (data, cb) => {
    // const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}','${data.pw}','${data.name}')`;
    // conn.query(query, (err, rows) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log('db_signup', rows);
    //     cb();
    // });
    const query = 'INSERT INTO user (userid,pw,name) VALUES (?,?,?)'
    conn.query(query, [data.userid,data.pw,data.name] ,(err,rows)=>{
        if (err) {
                console.log(err);
                return;
        }
        console.log('db_signup', rows);
        cb();
    })
};

//로그인
const db_signin = (data, cb) => {
    // const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}' `;
    // conn.query(query, (err, rows) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log('db_signin', rows);
    //     //select문의 쿼리문은 배열로 반환
    //     cb(rows);
    //     // (rows) => {
    //     //     if (rows.length > 0) {
    //     //         res.json({ result: true, data: rows[0] });
    //     //     } else {
    //     //         res.json({ result: false });
    //     //     }
    //     // }
    // });
    const query = 'SELECT * FROM user WHERE userid =? AND pw = ?'
    conn.query(query,[data.userid,data.pw],(err,rows)=>{
        if (err) {
                    console.log(err);
                    return;
                }
                console.log('db_signin', rows);
                //select문의 쿼리문은 배열로 반환
                cb(rows);
    })
};
//회원정보 조회
const db_profile = (data)=>{
    const query = 'SELECT * FROM user WHERE id = ?'
    conn.query(query,data.number,(err,rows)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('db_profile',rows)
        cb(rows)
    })
}
//회원정보 수정
const db_profile_edit = (data,cb)=>{
    const query ='UPDATE user SET userid = ?,name=?,pw=? WHERE id=?'
    conn.query = (query,[data.userid,data.name,data.pw,data.id],(err,rows)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('db_profile_edit',rows);
        cb()
    })
    
}

module.exports = {
    db_signup,
    db_signin,
    db_profile,
    db_profile_edit,
};
