// import mysql from 'mysql2/promise'
//mysql2 연결


//createConnection : 단일연결, 매번 연결이 필요할 때마다 새로운 연결
//열결수가 많아지면 성능에 영향이 생김
//createPool : 여러연결, 여러개의 연결을 미리 생성하고 관리
//요청이 들어올때마다 생성한 연결을 할당. 동시처리 가능


// export const post_signup = async(data)=>{
    //
    // try{
    //     const query='insert into user (userid,pw,name)values(?,?,?');'
    //      await comm.query(query,[data.userid,data.pw])
    // }catch(err){
    //     console.log(object);
    // }
// }

const mysql = require('mysql');

//mysql 연결
const conn = mysql.createConnection({
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
// });


conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connect');
});

exports.post_signup = (data, callback) => {
    const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
    conn.query(query, (err, rows) => {
        console.log('post_signup', rows);
        callback();
    });
};

'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//모델정의
db.User = require('./User')(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


// export const post_signin=(data)=>{
//     try {
//         const query ='select * from user where userid=? and pw=?'
//          const rows=await conn.query(query,[data.user,data.pw])
//         console.log(error)
//     } catch (error) {
        
//     }
// }

exports.post_signin = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
    conn.query(query, (err, rows) => {
        console.log('post_signin', rows);
        callback(rows);
    });
};


//다 검색
// exports.post_signup= (req , res) => {
//     models.user.fineAll().then((result)=>{
//         res.send({data:result})
//     })
// }

// export const post_profile=async(data)=>{
//     try {
//         const query='select * from user where userid =?'
//          const [rows]=await conn.query(query,[data.userid])
//          return rows;
//         await conn.query(query,[data.userid])
//     } catch (error) {
//         console.log(return)
// //     }
// }


exports.post_profile = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' `;
    conn.query(query, (err, rows) => {
        console.log('post_profile', rows);
        callback(rows);
    });
};


// export const edit_profile=async (data)=>{
//     try {
//         const query ='update user set userid=?,ps=?, name=? where id=?'
//         const[rows]=await conn.query(query,[data.userid,data.pw,data.name, data.id])
//         return rows
//     } catch (error) {
//         console.log(error)
//     }
// }

exports.edit_profile = (data, callback) => {
    const query = `UPDATE user SET userid='${data.userid}', pw='${data.pw}', name='${data.name}' WHERE id=${data.id}  `;
    conn.query(query, (err, rows) => {
        callback();
    });
};

// export const delete_profile=async(id)=>{
//     try {
//         const query= 'delete from user where id = ?'
//         await conn.query(query,[id])
//     } catch (error) {
//         console.log(err)
//     }
// }


exports.delete_profile = (id, callback) => {
    const query = `DELETE FROM user WHERE id=${id}`;
    conn.query(query, (err, rows) => {
        callback();
    });
};
