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
        instrucaoSql = `SELECT hostName, avg(bytesRecebido) AS medBytesRecebido, avg(bytesEnviado) AS medBytesEnviado FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT hostName, avg(bytesRecebido) AS medBytesRecebido, avg(bytesEnviado) AS medBytesEnviado FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName;`;
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
        instrucaoSql = `SELECT hostName, avg(usoAtualDisco) AS medUsoAtualDisco, avg(usoDisponivelDisco) AS medUsoDisponivelDisco FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT hostName, avg(usoAtualDisco) AS medUsoAtualDisco, avg(usoDisponivelDisco) AS medUsoDisponivelDisco FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName;`;
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
        instrucaoSql = `SELECT hostName, avg(qtdUsoCpu) AS medUsoAtualCpu FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT hostName, avg(qtdUsoCpu) AS medUsoAtualCpu FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName;`;
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
        instrucaoSql = `SELECT hostName, avg(memoriaEmUso) AS medMemoriaEmUso, avg(memoriaDisponivel) AS medMemoriaDisponivel FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT hostName, avg(memoriaEmUso) AS medMemoriaEmUso, avg(memoriaDisponivel) AS medMemoriaDisponivel FROM dadosComponente join maquina on idMaquina = fkMaquina GROUP BY hostName;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterNomeAme(IdUserVar) {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select nomeAme from usuario join AME on idAme = fkAme where idUsuario = ${IdUserVar};`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select nomeAme from usuario join AME on idAme = fkAme where idUsuario = ${IdUserVar};`;
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

// LISTA
function dadosCPU() {
    console.log ("Entrando no dadosCPU.Model")

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT fkMaquina, dtHora, CONVERT(qtdUsoCPU,SIGNED) AS 'CPU' FROM dadosComponente WHERE fkTipoComponente = 1 order by dtHora DESC LIMIT 1 ;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT fkMaquina, dtHora, CONVERT(qtdUsoCPU,SIGNED) AS 'CPU' FROM dadosComponente WHERE fkTipoComponente = 1 order by dtHora DESC LIMIT 1 ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadosRAM() {
    console.log ("Entrando no dadosRAM.Model")

    instrucaoSql = `SELECT fkMaquina, dtHora, CONVERT(memoriaEmUso,SIGNED) AS 'RAM' FROM dadosComponente WHERE fkTipoComponente = 2 order by dtHora DESC LIMIT 1 ;`;

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT fkMaquina, dtHora, CONVERT(memoriaEmUso,SIGNED) AS 'RAM' FROM dadosComponente WHERE fkTipoComponente = 2 order by dtHora DESC LIMIT 1 ;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT fkMaquina, dtHora, CONVERT(memoriaEmUso,SIGNED) AS 'RAM' FROM dadosComponente WHERE fkTipoComponente = 2 order by dtHora DESC LIMIT 1 ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadosDISCO() {
    console.log ("Entrando no dadosDISCO.Model")

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT fkMaquina, dtHora, usoAtualDisco from  dadosComponente WHERE  fkTipoComponente = 3 order by dtHora DESC LIMIT 1;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT fkMaquina, dtHora, usoAtualDisco from  dadosComponente WHERE  fkTipoComponente = 3 order by dtHora DESC LIMIT 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadosREDE() {
    console.log ("Entrando no dadosCPU.Model")

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT fkMaquina, dtHora, bytesRecebido as 'REDE'from  dadosComponente WHERE  fkTipoComponente = 4 order by dtHora DESC LIMIT 1;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT fkMaquina, dtHora, bytesRecebido as 'REDE'from  dadosComponente WHERE  fkTipoComponente = 4 order by dtHora DESC LIMIT 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirAlertaCPU(fkMaquina,dtHora,CPU) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO historicoAlerta VALUES (null,'${fkMaquina}', '${dtHora}','CPU','${CPU}%') ;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO historicoAlerta VALUES (null,'${fkMaquina}', '${dtHora}','CPU','${CPU}%') ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);  
}

function inserirAlertaRAM(fkMaquina,dtHora,RAM) {
    console.log ("Entrando no inserirAlertaRAM()")
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO historicoAlerta VALUES (null,'${fkMaquina}', '${dtHora}','RAM','${RAM}Gb') ;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO historicoAlerta VALUES (null,'${fkMaquina}', '${dtHora}','RAM','${RAM}Gb') ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);  
}

function inserirAlertaDISCO(fkMaquina,dtHora,DISCO) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO historicoAlerta VALUES (null,'${fkMaquina}', '${dtHora}','DISCO','${DISCO}Gb') ;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO historicoAlerta VALUES (null,'${fkMaquina}', '${dtHora}','DISCO','${DISCO}Gb') ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);  
}

function inserirAlertaREDE(fkMaquina,dtHora,REDE) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO historicoAlerta VALUES (null,'${fkMaquina}', '${dtHora}','REDE','${REDE}Mb') ;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO historicoAlerta VALUES (null,'${fkMaquina}', '${dtHora}','REDE','${REDE}Mb') ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);  
}

function listagemAlerta() {
    console.log("Function listagemAlertas():");
    var instrucao = `SELECT DISTINCT idMaquinaAlerta, dtHoraAlerta, nomeComponente, porcentagem FROM historicoAlerta ORDER BY dtHoraAlerta DESC;`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);  
}

module.exports = {
    buscarUltimasMedidas,
    redeMedidasEmTempoReal,
    obter_dados_rede,
    obterDadosDisco,
    obterDadosCPU,
    obterDadosRAM,
    obterIdMaquina,
    obterNomeAme,
    obterIdMaquina,
    dadosCPU,
    dadosRAM,
    dadosDISCO,
    dadosREDE,
    cardAlertasCPU,
    cardAlertasRAM,
    cardAlertasDISCO,
    cardAlertasREDE,
    inserirAlertaCPU,
    inserirAlertaRAM,
    inserirAlertaDISCO,
    inserirAlertaREDE,
    listagemAlerta
}