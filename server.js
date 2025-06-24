//Importando o modulo express
const express = require('express');
const cursoController = require('./controllers/curso.controller');

const app = express();
//Rota para listar cursos
app.get('/listar-cursos', cursoController.listar)
   

//definindo a porta do servidor
app.listen(3000, function() {
    console.log("Servidor rodando com sucesso!")
})

