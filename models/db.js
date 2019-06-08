const Sequelize = require('sequelize')  //CMD = npm install sequelize --save e npm install mysql2 --save

const sequelize = new Sequelize('postapp','root','',{
    host:"localhost", dialect:'mysql'
})

module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}