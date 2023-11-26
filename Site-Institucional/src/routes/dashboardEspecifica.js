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

router.get("/kpisParametroCpu/:fkAme", function (req, res) {
    dashboardEspecificaController.kpisParametroCpu(req, res);
})

router.get("/kpisParametroRam/:fkAme", function (req, res) {
    dashboardEspecificaController.kpisParametroRam(req, res);
})

router.get("/kpiRede/:fkAme", function (req, res) {
    dashboardEspecificaController.kpiRede(req, res);
})

router.get("/kpiTempoDisco/:fkAme", function (req, res) {
    dashboardEspecificaController.kpiTempoDisco(req, res);
})  

router.get("/informacoesMaquina/:fkAme", function (req, res) {
    dashboardEspecificaController.informacoesMaquina(req, res);
})

router.get("/obterDadosRede", function (req, res) {
    dashboardEspecificaController.obterDadosRede(req, res);
});

router.get("/obterDadosCpu", function (req, res) {
    dashboardEspecificaController.obterDadosCpu(req, res);
});

router.get("/obterDadosDiscoEspecifica", function (req, res) {
    dashboardEspecificaController.obterDadosDiscoEspecifica(req, res);
});

module.exports = router;