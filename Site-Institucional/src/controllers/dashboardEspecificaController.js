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
    var idMaquina = req.params.idMaquina

    if (fkAme == undefined) {
        console.log("fkAme está undefined");
    }

    dashboardEspecificaModel.kpisParametroCpu(fkAme, idMaquina)
      .then((response) => {
            res.json(response);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        })
}

function obterDadosRede(req, res) {
    var idMaquina = req.params.idMaquina
    dashboardEspecificaModel.obterDadosRede(idMaquina)
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
    var idMaquina = req.params.idMaquina

    if (fkAme == undefined) {
        console.log("fkAme está undefined");
    }

    dashboardEspecificaModel.kpisParametroRam(fkAme, idMaquina)
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
    var idMaquina = req.params.idMaquina

    if (fkAme == undefined) {
        console.log("fkAme está undefined");
    }

    dashboardEspecificaModel.kpiRede(fkAme, idMaquina)
      .then((response) => {
            res.json(response);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        })
}

  
function obterDadosCpu(req, res) {
    var idMaquina = req.params.idMaquina
    dashboardEspecificaModel.obterDadosCpu(idMaquina)
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
    var idMaquina = req.params.idMaquina

    if (fkAme == undefined) {
        console.log("fkAme está undefined");
    }

    dashboardEspecificaModel.kpiTempoDisco(fkAme, idMaquina)
        .then((response) => {
            res.json(response);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        })
}
  
function obterDadosDiscoEspecifica(req, res) {
    var idMaquina = req.params.idMaquina
    dashboardEspecificaModel.obterDadosDiscoEspecifica(idMaquina)

        .then((response) => {
            res.json(response);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        })
}

function informacoesMaquina(req, res) {
    var fkAme = req.params.fkAme
    var idMaquina = req.params.idMaquina

    if (fkAme == undefined) {
        console.log("fkAme está undefined");
    }

    dashboardEspecificaModel.informacoesMaquina(fkAme, idMaquina)
        .then((response) => {
            res.json(response);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        })
}

function listagemAlerta(req, res) {
    medidaModel.listagemAlerta().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
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
    obterDadosDiscoEspecifica,
    informacoesMaquina,
    listagemAlerta
}