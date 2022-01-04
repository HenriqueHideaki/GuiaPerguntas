const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','hhkslyctk',{
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;