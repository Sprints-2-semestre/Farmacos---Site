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
    from maquina join ame WHERE idAme = ${fkAme};`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function kpisParametroCpu(fkAme, idMaquina) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT DC.qtdUsoCpu, P.medio, P.maximo, A.idAme, M.idMaquina, DC.dtHora
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE DC.qtdUsoCpu IS NOT NULL AND DATE(DC.dtHora) = curdate() AND A.idAme = ${fkAme} AND p.fkTipoComponente = 1 AND M.idMaquina = ${idMaquina};`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function kpisParametroRam(fkAme, idMaquina) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT DC.memoriaEmUso, P.medio, P.maximo, A.idAme, M.idMaquina, DC.dtHora
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE DC.memoriaEmUso IS NOT NULL AND DATE(DC.dtHora) = curdate() AND A.idAme = ${fkAme} AND p.fkTipoComponente = 2 AND M.idMaquina = ${idMaquina};`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function kpiRede(fkAme, idMaquina) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT DC.bytesRecebido, P.medio, P.maximo, A.idAme, M.idMaquina, DC.dtHora
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE DC.bytesRecebido IS NOT NULL AND DATE(DC.dtHora) = curdate() AND A.idAme = ${fkAme} AND p.fkTipoComponente = 4 AND M.idMaquina = ${idMaquina} ORDER BY DC.dtHora DESC;`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function kpiTempoDisco(fkAme, idMaquina) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT DC.usoAtualDisco, P.medio, P.maximo, A.idAme, M.idMaquina, DC.dtHora
    FROM dadosComponente DC
    JOIN ame AS A
    JOIN maquina AS M
    JOIN tipoComponente TC ON DC.fkTipoComponente = TC.idTipoComp
    LEFT JOIN parametro P ON TC.idTipoComp = P.fkTipoComponente
    WHERE DC.usoAtualDisco IS NOT NULL AND DATE(DC.dtHora) = curdate() AND A.idAme = ${fkAme} AND p.fkTipoComponente = 3 AND M.idMaquina = ${idMaquina};`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)
}

function informacoesMaquina(fkAme, idMaquina) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT *
FROM
    maquina
WHERE
    maquina.idMaquina = ${idMaquina};`

    console.log("Executando a instrução do SQL " + instrucaoSql)
    return database.executar(instrucaoSql)

}

function obterDadosRede(idMaquina) {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT
    bytesRecebido,
    bytesEnviado,
    FORMAT(dtHora, 'HH:mm:ss') AS HoraCaptura
FROM
    dadosComponente
WHERE
    bytesRecebido IS NOT NULL AND bytesEnviado IS NOT NULL
ORDER BY
    dtHora DESC
OFFSET 0 ROWS FETCH NEXT 4 ROWS ONLY;`;
        instrucaoSql = `SELECT
    bytesRecebido,
    bytesEnviado,
    FORMAT(dtHora, 'HH:mm:ss') AS HoraCaptura
FROM
    dadosComponente
WHERE
    bytesRecebido IS NOT NULL AND bytesEnviado IS NOT NULL
ORDER BY
    dtHora DESC
OFFSET 0 ROWS FETCH NEXT 4 ROWS ONLY;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select bytesRecebido, bytesEnviado, date_format(dtHora, '%T') as HoraCaptura from dadosComponente JOIN maquina WHERE bytesRecebido IS NOT NULL
        AND bytesEnviado IS NOT NULL 
        AND maquina.idMaquina = ${idMaquina} ORDER BY (dtHora) DESC LIMIT 4;`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosCpu(idMaquina) {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT
    dc1.memoriaEmUso,
    dc2.qtdUsoCpu,
    FORMAT(dc1.dtHora, 'HH:mm:ss') AS dtHora
FROM
    dadosComponente dc1
LEFT JOIN
    dadosComponente dc2 ON dc1.dtHora = dc2.dtHora
WHERE
    dc1.memoriaEmUso IS NOT NULL
    AND dc2.qtdUsoCpu IS NOT NULL
ORDER BY
    dc1.dtHora DESC
OFFSET 0 ROWS -- OFFSET e FETCH são usados para paginar resultados
FETCH FIRST 5 ROWS ONLY;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT
    dc1.memoriaEmUso,
    dc2.qtdUsoCpu,
    FORMAT(dc1.dtHora, 'HH:mm:ss') AS dtHora
FROM
    dadosComponente dc1
LEFT JOIN
    dadosComponente dc2 ON dc1.dtHora = dc2.dtHora
WHERE
    dc1.memoriaEmUso IS NOT NULL
    AND dc2.qtdUsoCpu IS NOT NULL
ORDER BY
    dc1.dtHora DESC
OFFSET 0 ROWS -- OFFSET e FETCH são usados para paginar resultados
FETCH FIRST 5 ROWS ONLY;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosDiscoEspecifica(idMaquina) {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 1
    maquina.hostName,
    dadosComponente.usoAtualDisco,
    dadosComponente.usoDisponivelDisco
FROM
    dadosComponente
JOIN
    maquina ON dadosComponente.fkMaquina = maquina.idMaquina
WHERE
    dadosComponente.usoAtualDisco IS NOT NULL
    AND dadosComponente.usoDisponivelDisco IS NOT NULL;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT hostName, usoAtualDisco, usoDisponivelDisco FROM dadosComponente join maquina on idMaquina = fkMaquina WHERE maquina.idMaquina = ${idMaquina} AND usoAtualDisco AND usoDisponivelDisco IS NOT NULL LIMIT 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listagemAlerta() {
    console.log("Function listagemAlertas():");
    var instrucao = `SELECT DISTINCT
    idMaquinaAlerta,
    dtHoraAlerta,
    nomeComponente,
    porcentagem
FROM
    historicoAlerta
ORDER BY
    dtHoraAlerta DESC;`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);  
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
    informacoesMaquina,
    listagemAlerta
}