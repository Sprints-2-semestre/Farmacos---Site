var database = require("../database/config")

// função assíncrona        
async function cadastrarAlerta(componente, maximo, medio) {
    console.log("ACESSEI O ALERTA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", maximo, medio);

    const verificarExistencia = `SELECT COUNT(*) as count FROM parametro WHERE fkTipoComponente = ${componente};`;
    
    try {
        const resultado = await database.executar(verificarExistencia);
        const count = resultado[0].count;

        if (count > 0) {
            throw new Error("Já existe uma entrada com a mesma fkTipoComponente. Restrição violada.");  
        }
        const instrucao = `
            INSERT INTO parametro (fkTipoComponente, maximo, medio, fkPermissaoParametro) 
            VALUES ('${componente}', '${maximo}', '${medio}', '1');`;

        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    } catch (erro) {
        console.error("Erro ao cadastrar alerta:", erro.message);
        throw erro;
    }
}

function listarAlertas() {
    console.log("ACESSEI O ALERTA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarAlertas():");
    var instrucao = `SELECT nomeTipoComp, maximo, medio from tipoComponente JOIN parametro on idTipoComp = fkTipoComponente ;`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterarAlerta(componente, maximo, medio) {
    console.log("ACESSEI O ALERTA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterarAlerta():", componente, maximo, medio);

    var instrucao = `UPDATE parametro SET maximo = '${maximo}', medio = '${medio}' WHERE fkTipoComponente = '${componente}';`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function deletarAlerta(componente) {
    var instrucao = `DELETE parametro FROM parametro
    JOIN tipoComponente ON tipoComponente.idTipoComp = parametro.fkTipoComponente
    WHERE tipoComponente.nomeTipoComp = '${componente}'; `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarAlerta,
    listarAlertas,
    alterarAlerta,
    deletarAlerta
};