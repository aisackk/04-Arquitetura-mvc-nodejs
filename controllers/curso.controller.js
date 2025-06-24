const cursoModel = require('../models/curso.model')

function listar(request, response){
    //Chamar a funcao model que lista os cursos
    const cursos = cursoModel.listarCursos();

    //Retornar resposta ao cliente
    response.json(cursos);
}

module.exports = {
    listar
}
   
    
