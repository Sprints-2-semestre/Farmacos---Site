var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function validar(tokenAME) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function validar():", tokenAME);

    var instrucao = `SELECT idAme FROM AME WHERE idAme = '${tokenAME}';`

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}


// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, tokenAME) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, tokenAME);


    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    // var pegarId = "SELECT count(idUsuario) from usuario"

    var instrucao = `
    INSERT INTO usuario (nome, email, senha, cargo, fkPermissaoUsuario,fkAme) VALUES ('${nome}', '${email}', '${senha}', 'ENG. NOC', 1, ${tokenAME});`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function editarNoc(nome, email, senha, idUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editarNoc():", nome, email, senha, idUser);

    var instrucao = `
    UPDATE usuario SET nome = '${nome}', email = '${email}', senha = '${senha}' WHERE idUsuario = '${idUser}';`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function deletar(idUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idUser);

    var instrucao = `
    DELETE FROM usuario WHERE idUsuario = '${idUser}';`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

    module.exports = {
        entrar,
        cadastrar,
        listar,
        validar,
        editarNoc,
        deletar,
    };