var express = require("express");
var router = express.Router();

var dashboardEspecificaController = require("../controllers/dashboardEspecificaController");

router.get("/nomeAme/:idNoc", function (req, res) {
    dashboardEspecificaController.nomeAme(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listarMaquinas/:fkAme", function (req, res) {
    dashboardEspecificaController.listarMaquinas(req, res);
})

router.get("/kpisParametroCpu/:fkAme/:idMaquina", function (req, res) {
    dashboardEspecificaController.kpisParametroCpu(req, res);
})

router.get("/kpisParametroRam/:fkAme/:idMaquina", function (req, res) {
    dashboardEspecificaController.kpisParametroRam(req, res);
})

router.get("/kpiRede/:fkAme/:idMaquina", function (req, res) {
    dashboardEspecificaController.kpiRede(req, res);
})

router.get("/kpiTempoDisco/:fkAme/:idMaquina", function (req, res) {
    dashboardEspecificaController.kpiTempoDisco(req, res);
})  

router.get("/informacoesMaquina/:fkAme/:idMaquina", function (req, res) {
    dashboardEspecificaController.informacoesMaquina(req, res);
})

router.get("/obterDadosRede/:idMaquina", function (req, res) {
    dashboardEspecificaController.obterDadosRede(req, res);
});

router.get("/obterDadosCpu/:idMaquina", function (req, res) {
    dashboardEspecificaController.obterDadosCpu(req, res);
});

router.get("/obterDadosDiscoEspecifica/:idMaquina", function (req, res) {
    dashboardEspecificaController.obterDadosDiscoEspecifica(req, res);
});

router.get("/listagemAlerta/:idMaquina", function (req, res) {
    medidaController.listagemAlerta(req, res);
});

module.exports = router;