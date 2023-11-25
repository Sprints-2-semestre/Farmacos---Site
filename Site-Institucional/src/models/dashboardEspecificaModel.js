var database = require("../database/config")

function nomeAme(idNoc) {
    var instrucaoSql = `select nomeAme from ame WHERE idAme = ${idNoc};`
    console.log("Acessei o usuário Model")
    console.log("Executando a instrução SQL: \n " + instrucaoSql)

    return database.executar(instrucaoSql)
}

function listarMaquinas(fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `select *
    from maquina join ame on ame.idAme = maquina.fkAme WHERE idAme = ${fkAme};`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function kpisParametroCpu(fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT DC.qtdUsoCpu, P.medio, P.maximo, A.idAme, M.idMaquina
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE qtdUsoCpu IS NOT NULL AND A.idAme = ${fkAme} AND p.idParametro = 1;`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function kpisParametroRam(fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT DC.memoriaEmUso, P.medio, P.maximo, A.idAme, M.idMaquina
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE DC.memoriaEmUso IS NOT NULL AND A.idAme = ${fkAme} AND p.idParametro = 2;`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function kpiRede(fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT DC.bytesRecebido, P.medio, P.maximo, A.idAme, M.idMaquina
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE DC.bytesRecebido IS NOT NULL AND A.idAme = ${fkAme} AND p.idParametro = 4;`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function kpiTempoDisco(fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT DC.usoAtualDisco, P.medio, P.maximo, A.idAme, M.idMaquina
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE DC.usoAtualDisco IS NOT NULL AND A.idAme = ${fkAme} AND p.idParametro = 3;`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function informacoesMaquina(fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT * FROM maquina JOIN ame ON ame.idAme = maquina.idMaquina 
    WHERE ame.idAme = ${fkAme};`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}
module.exports = {
    nomeAme,
    listarMaquinas,
    kpisParametroCpu,
    kpisParametroRam,
    kpiRede,
    kpiTempoDisco,
    informacoesMaquina
}