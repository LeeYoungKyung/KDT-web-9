const express = require('express')
const app = express()
const PORT =8000
const mysql=require('mysql')

app.set('view engine','ejs')
app.set('views','./views')
app.use(express.urlencoded({extended:true}))
// app.use(express.urlencoded({extended:true}))

app.use(express.json());

//mysql연결
const conn = mysql.createConnection({
    host:'localhost',
    user:'yk',
    password:'1214',
    database:'kdt9',
    post:3306,
})
conn.connect((err)=>{
    if(err){
        console.log('error');
        return;
    }console.log('connect')
})

// const indexRouter =require('./routes')
// app.use('/',indexRouter)


//방명록 전체 보기
app.get('/',(req,res)=>{
    res.render('index');
})
//방명록 하나 조회
app.get('/visitor',(req,res)=>{
    const query = 'SELECT * FROM visitor'
    conn.query(query,(err,rows)=>{
        console.log(rows);
        res.render('visitor',{data:rows})
    })
    
})

app.getMaxListeners('/visitor/get',(req,res)=>{
    res.send('방명록 하나 조회')
})
//하나 생성
app.post('/visitor/write',(req,res)=>{
    const query = `insert into visitor (name,comment) values('${req.body.name}','${req.body.comment}')`
    conn.query(query,(err,rows)=>{
        console.log(rows)
        res.send({id: rows.insertId, name:req.body.name, comment:req.body.comment})
    })
    //res.send({id:  name:  comment})
})

app.patch('/visitor/edit',(req,res)=>{
    res.send('방명록 하나 수정')
})
app.delete('/visitor/delete',(req,res)=>{
    res.send('방명록 하나 삭제')
})




app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})