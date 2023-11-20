var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function redeMedidasEmTempoReal() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select fkMaquina, bytesRecebido, bytesEnviado, DATE_FORMAT(dtHora, '%d/%m/%Y %H:%i:%s') as momento_grafico from dadosComponente;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select fkMaquina, bytesRecebido, bytesEnviado, DATE_FORMAT(dtHora, '%d/%m/%Y %H:%i:%s') as momento_grafico from dadosComponente;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function obter_dados_rede() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT fkMaquina, avg(bytesRecebido) AS medBytesRecebido, avg(bytesEnviado) AS medBytesEnviado FROM dadosComponente GROUP BY fkMaquina;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT fkMaquina, avg(bytesRecebido) AS medBytesRecebido, avg(bytesEnviado) AS medBytesEnviado FROM dadosComponente GROUP BY fkMaquina;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosDisco() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT fkMaquina, avg(usoAtualDisco) AS medUsoAtualDisco, avg(usoDisponivelDisco) AS medUsoDisponivelDisco FROM dadosComponente GROUP BY fkMaquina;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT fkMaquina, avg(usoAtualDisco) AS medUsoAtualDisco, avg(usoDisponivelDisco) AS medUsoDisponivelDisco FROM dadosComponente GROUP BY fkMaquina;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosCPU() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT fkMaquina, avg(qtdUsoCpu) AS medUsoAtualCpu FROM dadosComponente GROUP BY fkMaquina;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT fkMaquina, avg(qtdUsoCpu) AS medUsoAtualCpu FROM dadosComponente GROUP BY fkMaquina;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function obterDadosRAM() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT fkMaquina, avg(memoriaEmUso) AS medMemoriaEmUso, avg(memoriaDisponivel) AS medMemoriaDisponivel FROM dadosComponente GROUP BY fkMaquina;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT fkMaquina, avg(memoriaEmUso) AS medMemoriaEmUso, avg(memoriaDisponivel) AS medMemoriaDisponivel FROM dadosComponente GROUP BY fkMaquina;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterIdMaquina() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select idMaquina from maquina;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select idMaquina from maquina;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cardAlertasCPU() {
    console.log ("Entrando no cardAlertasCPU.Model")

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT nomeTipoComp, maximo, medio from parametro JOIN tipoComponente ON idTipoComp = fkTipoComponente where fkTipoComponente = 1;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT nomeTipoComp, maximo, medio from parametro JOIN tipoComponente ON idTipoComp = fkTipoComponente where fkTipoComponente = 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cardAlertasRAM() {
    console.log ("Entrando no cardAlertasRAM.Model")

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT nomeTipoComp, maximo, medio from parametro JOIN tipoComponente ON idTipoComp = fkTipoComponente where fkTipoComponente = 2;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT nomeTipoComp, maximo, medio from parametro JOIN tipoComponente ON idTipoComp = fkTipoComponente where fkTipoComponente = 2;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cardAlertasDISCO() {
    console.log ("Entrando no cardAlertasDISCO.Model")

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT nomeTipoComp, maximo, medio from parametro JOIN tipoComponente ON idTipoComp = fkTipoComponente where fkTipoComponente = 3;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT nomeTipoComp, maximo, medio from parametro JOIN tipoComponente ON idTipoComp = fkTipoComponente where fkTipoComponente = 3;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cardAlertasREDE() {
    console.log ("Entrando no cardAlertasREDE.Model")

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT nomeTipoComp, maximo, medio from parametro JOIN tipoComponente ON idTipoComp = fkTipoComponente where fkTipoComponente = 4;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT nomeTipoComp, maximo, medio from parametro JOIN tipoComponente ON idTipoComp = fkTipoComponente where fkTipoComponente = 4;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    redeMedidasEmTempoReal,
    obter_dados_rede,
    obterDadosDisco,
    obterDadosCPU,
    obterDadosRAM,
    obterIdMaquina,
    cardAlertasCPU,
    cardAlertasRAM,
    cardAlertasDISCO,
    cardAlertasREDE
}