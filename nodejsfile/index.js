const express = require('express');
const app = express();
const PORT = 8000;
let hash=''
//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/hash',(req,res)=>{
    //반환된다 들어간 값
    const {pw}=req.body
    // const hash = createHashPassword(pw)
    const hash = createPbkdf(pw)
    res.json({hash})
})
app.post('/verify',(req,res)=>{
    const {pw}=req.body
    const compare = verifyPassword(pw,salt)
})
//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

const crypto = require('crypto');
const { realpathSync } = require('fs');

const createHashPassword = (password) =>{
    //createHasH(알고리즘).update(암호화할 값).digest(인코딩 방식)
    return crypto.createHash('sha512').update(password).digest('base64')
}
//pbkdf2함수 
const salt = crypto.randomBytes(16).toString('base64')//솔트생성
const iterations = 100 // 반복횟수
const keylen = 64//생성할 키의 길이
const digest = 'sha512'//해시 알고리즘

//단방향 암호화 생성
const createPbkdf = (password)=>{
    //pbkdf2함수(비밀번호, 솔트 , 반복횟수, 키의길이 , 알고리즘)으로 생성
    //반환되는 값은 buffer값
    const hash = crypto.pbkdf2Sync(password,salt,iterations,keylen)
    // console.log(hash)
    return hash.toString('base64')
}
//암호비교
const verifyPassword = (password,salt,dbPassword) =>{
    const compare = crypto.pbkdf2Sync(password,salt,iterations,keylen,digest).toString('base64')
    if (compare===dbPassword){
        return true;
    }else{
        return false;
    }
}
//양방향
const algorithm = 'aes-256-cbc' //256비트 키를 사용, 블록 크기는 128블록
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16) //초기화 백터, 데어터 블록을 암호화 할때 보안성을 높이기 위해 사용

//암호화
//문서값이 옴 단순히 비번아니고 문서 값
const cipherEncrypt = (word)=>{
    //creatcipheriv
    const cipher = crypto.createCipheriv(algorithm,key,iv)//암호화 객체 생성
    let encryptedData=cipher.update(word,'utf-8','base64')//암호화 할 데이터를 처리
    encryptedData+=cipher.final('base64')//최종결과 생성
    return encryptedData;
}
//복호화
const decipher = (cipherEncrypt) =>{
    const decipher = crypto.createDecipheriv(algorithm,key,iv)//복호화 객체 생성
    let decryptedData = decipher.update(encryptedData,'base64','utf-8')//암호화 된 값을 다시 평문으로 만드는 과정 위와 순서 반대
    decryptedData += decipher.final('utf-8')
    return decryptedData
    
}