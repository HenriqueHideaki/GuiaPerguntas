const Sequelize = require("sequelize");
const connection = require("./database");


//Definição do model 
const Pergunta = connection.define('perguntas',{
  //Campos da minha tabela, Tipos
  titulo:{
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});


//envio meu model para o banco de dados
Pergunta.sync({force: false}).then(() => {
  console.log("Tabela Criada");
});//sincroniza  com o banco de dados

module.exports = Pergunta;