//CRUD
/**
 * c - create - post - INSERT INTO
 * r - read - GET - SELECT
 * u - update - PUT - UPDATE
 * d - celete - DELETE - DELETE FROM
 */

/**TABELA: CURSOS 
 * cOLUNAS: ID, NOME, DURACAO, DESCRICAO
 * Exemplo de dados:
 * | id | nome                | duracao | descricao                      |
 * | 1  | Tecnico Informatica | 1200    | Nao e basico, pura programacao |
 * | 2  | Tecnico Enfermagem  | 1600    | Curso focado na área da saude  |
 */



function listarCursos() {
    const cursos = [
    {id: 1, nome: "Tecnico Informática", duracao: 1200, descricao: "Nao e basico, pura programaçao"},
    {id: 2, nome: "Tecnico Enfermagem", duracao: 1600, descricao: "Curso focado na area da saude"},
    {id: 3, nome: "Tecnico Podologia", duracao: 1200, descricao: "Packzin do pe pros crias👩👩"}
    ]

    return cursos;
}

module.exports = {
    listarCursos
}