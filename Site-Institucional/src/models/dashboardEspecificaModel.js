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
    var instrucaoSql = `SELECT DC.qtdUsoCpu, P.medio, P.maximo, A.idAme, M.idMaquina, DC.dtHora
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE DC.qtdUsoCpu IS NOT NULL AND DATE(DC.dtHora) = curdate() AND A.idAme = ${fkAme} AND p.fkTipoComponente = 1;`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function kpisParametroRam(fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT DC.memoriaEmUso, P.medio, P.maximo, A.idAme, M.idMaquina, DC.dtHora
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE DC.memoriaEmUso IS NOT NULL AND DATE(DC.dtHora) = curdate() AND A.idAme = ${fkAme} AND p.fkTipoComponente = 2;`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function kpiRede(fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT DC.bytesRecebido, P.medio, P.maximo, A.idAme, M.idMaquina, DC.dtHora
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE DC.bytesRecebido IS NOT NULL AND DATE(DC.dtHora) = curdate() AND A.idAme = ${fkAme} AND p.fkTipoComponente = 4 ORDER BY DC.dtHora DESC;`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function kpiTempoDisco(fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT DC.usoAtualDisco, P.medio, P.maximo, A.idAme, M.idMaquina, DC.dtHora
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE DC.usoAtualDisco IS NOT NULL AND DATE(DC.dtHora) = curdate() AND A.idAme = ${fkAme} AND p.fkTipoComponente = 3;`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function informacoesMaquina(fkAme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT * FROM maquina JOIN ame JOIN maquinaTipoComponente ON
     maquina.idMaquina = maquinaTipoComponente.fkMaquina WHERE ame.idAme = ${fkAme};`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function obterDadosRede() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select bytesRecebido, bytesEnviado, date_format(dtHora, '%T') as HoraCaptura from dadosComponente WHERE bytesRecebido AND bytesEnviado is not null ORDER BY (dtHora) DESC LIMIT 4;`;
        instrucaoSql = `select bytesRecebido, bytesEnviado, date_format(dtHora, '%T') as HoraCaptura from dadosComponente WHERE bytesRecebido AND bytesEnviado is not null ORDER BY (dtHora) DESC LIMIT 5;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select bytesRecebido, bytesEnviado, date_format(dtHora, '%T') as HoraCaptura from dadosComponente WHERE bytesRecebido AND bytesEnviado is not null ORDER BY (dtHora) DESC LIMIT 4;`;
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
    obterDadosRede,
    obterDadosCpu,
    obterDadosDiscoEspecifica,
    listarMaquinas,
    kpisParametroCpu,
    kpisParametroRam,
    kpiRede,
    kpiTempoDisco,
    informacoesMaquina
}