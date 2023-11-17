var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/obterDadosRede", function (req, res) {
    medidaController.obter_dados_rede(req, res);
});

router.get("/rede-tempo-real", function (req, res) {
    medidaController.redeMedidasEmTempoReal(req, res);
})

router.get("/obterIdMaquina", function (req, res) {
    medidaController.obterIdMaquina(req, res);
});

module.exports = router;