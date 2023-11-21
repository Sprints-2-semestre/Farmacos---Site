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

router.get("/obterDadosRede", function (req, res) {
    dashboardEspecificaController.obterDadosRede(req, res);
});

router.get("/obterDadosCpu", function (req, res) {
    dashboardEspecificaController.obterDadosCpu(req, res);
});

module.exports = router;