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

function obterDadosRede() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select bytesRecebido, bytesEnviado, date_format(dtHora, '%T') as HoraCaptura from dadosComponente WHERE bytesRecebido AND bytesEnviado is not null ORDER BY (dtHora) DESC LIMIT 3;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select bytesRecebido, bytesEnviado, date_format(dtHora, '%T') as HoraCaptura from dadosComponente WHERE bytesRecebido AND bytesEnviado is not null ORDER BY (dtHora) DESC LIMIT 3;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosCpu() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT dc1.memoriaEmUso, dc2.qtdUsoCpu, TIME_FORMAT(dc1.dtHora, '%H:%i:%s') AS dtHora
        FROM dadosComponente dc1
        LEFT JOIN dadosComponente dc2 ON dc1.dtHora = dc2.dtHora
        WHERE dc1.memoriaEmUso IS NOT NULL AND dc2.qtdUsoCpu IS NOT NULL
        ORDER BY dc1.dtHora DESC LIMIT 5;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT dc1.memoriaEmUso, dc2.qtdUsoCpu, TIME_FORMAT(dc1.dtHora, '%H:%i:%s') AS dtHora
        FROM dadosComponente dc1
        LEFT JOIN dadosComponente dc2 ON dc1.dtHora = dc2.dtHora
        WHERE dc1.memoriaEmUso IS NOT NULL AND dc2.qtdUsoCpu IS NOT NULL
        ORDER BY dc1.dtHora DESC LIMIT 5;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosDiscoEspecifica() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT hostName, usoAtualDisco, usoDisponivelDisco FROM dadosComponente join maquina on idMaquina = fkMaquina WHERE usoAtualDisco AND usoDisponivelDisco IS NOT NULL LIMIT 1;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT hostName, usoAtualDisco, usoDisponivelDisco FROM dadosComponente join maquina on idMaquina = fkMaquina WHERE usoAtualDisco AND usoDisponivelDisco IS NOT NULL LIMIT 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    nomeAme,
    listarMaquinas,
    obterDadosRede,
    obterDadosCpu,
    obterDadosDiscoEspecifica
}