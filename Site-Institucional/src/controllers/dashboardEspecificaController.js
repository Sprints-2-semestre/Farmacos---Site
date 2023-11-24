var dashboardEspecificaModel = require("../models/dashboardEspecificaModel");
var sessoes = [];

function nomeAme(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idNoc = req.params.idNoc

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    dashboardEspecificaModel.nomeAme(idNoc)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// function kpiRede(req, res) {
//     let bytesRecebido = req.params.bytesRecebido;
//     let bytesEnviado = req.params.bytesEnviado;
//     let idMaquina = req.params.idMaquina;

//     if(bytesRecebido == undefined && bytesEnviado == undefined) {
//         console.log("idInstituicao está undefined");
//     } else if(idMaquina == undefined) {
//         console.log("idMaquina está undefined");
//     }

//     dashboardEspecificaModel.kpiRede(idMaquina, bytesRecebido, bytesEnviado)
//         .then((response) => {
//             res.json(response);
//         })
//         .catch((erro) => {
//             console.log(erro);
//             res.status(500).json(erro.sqlMessage)
//         })
// }

function listarMaquinas(req, res) {
    var fkAme = req.params.fkAme

    if(fkAme == undefined) {
        console.log("fkAme está undefined");
    }

    dashboardEspecificaModel.listarMaquinas(fkAme)
        .then((response) => {
            res.json(response);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        })
}

function obterDadosRede(req, res) {

    dashboardEspecificaModel.obterDadosRede()
        .then((response) => {
            res.json(response);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        })
}

function obterDadosCpu(req, res) {

    dashboardEspecificaModel.obterDadosCpu()
        .then((response) => {
            res.json(response);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        })
}

function obterDadosDisco(req, res) {

    dashboardEspecificaModel.obterDadosDisco()
        .then((response) => {
            res.json(response);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        })
}

module.exports = {
    nomeAme,
    // kpiRede
    listarMaquinas,
    obterDadosRede,
    obterDadosCpu,
    obterDadosDisco
}