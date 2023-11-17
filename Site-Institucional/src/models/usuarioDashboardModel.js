var database = require("../database/config.js")

function listar(fkAme) {
    var instrucao = `
        SELECT nome FROM usuario WHERE fkAme = ${fkAme};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha, cargo, permissao, fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha,cargo, permissao, fkAme);


    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var permissaoNumber = Number(permissao);


    var instrucao = `
    INSERT INTO usuario (nome, email, senha, cargo, fkPermissaoUsuario, fkAme) VALUES ('${nome}', '${email}', '${senha}', '${cargo}', ${permissaoNumber}, ${fkAme});`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(nome, email, senha, cargo, permissao, idUsuario){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar():", nome, email, senha, cargo, permissao, idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var permissaoNumber = Number(permissao);


    var instrucao = `
    UPDATE usuario SET nome = '${nome}', email = '${email}', senha = '${senha}', cargo = '${cargo}', fkPermissaoUsuario = ${permissaoNumber} WHERE idUsuario = ${idUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function puxarUsuarios(fkAme){
    var instrucao = `SELECT nome, idUsuario FROM usuario where fkAme = ${fkAme};`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function excluirUsuario(idUsuario){
    var instrucao = `DELETE from usuario WHERE idUsuario = ${idUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar, 
    editar,
    puxarUsuarios,
    excluirUsuario
};