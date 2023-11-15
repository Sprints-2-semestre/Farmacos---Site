var database = require("../database/config.js")
function editarNoc(nome, email, senha, cargo, permissao){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);


    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var pegarId = `SELECT idUsuario from usuario where nome = ${nome}`

    var instrucao = `
    UPDATE usuario SET nome = ${nome}, email = ${email}, senha = ${senha}, cargo = ${cargo}, permissao = ${permissao} WHERE idUsuario = ${pegarId};`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function puxarNoc(fkAme){
    var instrucao = `SELECT nome, idUsuario FROM usuario WHERE fkAme = ${fkAme} AND fkPermissaoUsuario = 1;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function excluirNoc(idUsuario){
    var instrucao = `DELETE from usuario WHERE idUsuario = ${idUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    editarNoc,
    puxarNoc,
    excluirNoc
};