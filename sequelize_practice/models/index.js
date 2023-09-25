'use strict';


const { Template } = require('ejs');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);

//모델 
//db에 user생성

db.User = require('./user')(sequelize)
// //const model = require('./User)
// //const temp=model(sequelize)
// db.User = temp

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
