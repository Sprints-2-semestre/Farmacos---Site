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

function listarMaquinas(req, res) {
    var fkAme = req.params.fkAme

    if (fkAme == undefined) {
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

function kpisParametroCpu(req, res) {
    var fkAme = req.params.fkAme

    if (fkAme == undefined) {
        console.log("fkAme está undefined");
    }

    dashboardEspecificaModel.kpisParametroCpu(fkAme)
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

function kpisParametroRam(req, res) {
    var fkAme = req.params.fkAme

    if (fkAme == undefined) {
        console.log("fkAme está undefined");
    }

    dashboardEspecificaModel.kpisParametroRam(fkAme)
        .then((response) => {
            res.json(response);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        })
}

function kpiRede(req, res) {
    var fkAme = req.params.fkAme

    if (fkAme == undefined) {
        console.log("fkAme está undefined");
    }

    dashboardEspecificaModel.kpiRede(fkAme)
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

function kpiTempoDisco(req, res) {
    var fkAme = req.params.fkAme

    if (fkAme == undefined) {
        console.log("fkAme está undefined");
    }

    dashboardEspecificaModel.kpiTempoDisco(fkAme)
        .then((response) => {
            res.json(response);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        })
}
  
function obterDadosDiscoEspecifica(req, res) {

    dashboardEspecificaModel.obterDadosDiscoEspecifica()

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
    listarMaquinas,
    kpisParametroCpu,
    kpisParametroRam,
    kpiRede,
    kpiTempoDisco,
    obterDadosRede,
    obterDadosCpu,
    obterDadosDiscoEspecifica
}