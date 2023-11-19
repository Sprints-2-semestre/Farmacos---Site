var database = require("../database/config")

function nomeAme(idNoc) {
    var instrucaoSql = `select nomeAme from ame WHERE idAme = ${idNoc};`
    console.log("Acessei o usuário Model")
    console.log("Executando a instrução SQL: \n " + instrucaoSql)

    return database.executar(instrucaoSql)
}

function listarMaquinas(fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `select maquina.idMaquina as maquinas,
    maquina.statusMaquina as statusMaquina 
    from maquina join ame on ame.idAme = maquina.fkAme WHERE idAme = ${fkAme} group by maquinas, statusMaquina;;`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    nomeAme,
    listarMaquinas
}