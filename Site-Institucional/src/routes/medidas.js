var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/obterDadosRede", function (req, res) {
    medidaController.obter_dados_rede(req, res);
});

router.get("/obterDadosDisco", function (req, res) {
    medidaController.obterDadosDisco(req, res);
});

router.get("/obterDadosCPU", function (req, res) {
    medidaController.obterDadosCPU(req, res);
});

router.get("/obterDadosRAM", function (req, res) {
    medidaController.obterDadosRAM(req, res);
});

router.get("/rede-tempo-real", function (req, res) {
    medidaController.redeMedidasEmTempoReal(req, res);
})

router.get("/obterIdMaquina", function (req, res) {
    medidaController.obterIdMaquina(req, res);
});

router.get("/cardAlertasCPU", function (req, res) {
    medidaController.cardAlertasCPU(req, res);
});

router.get("/cardAlertasRAM", function (req, res) {
    medidaController.cardAlertasRAM(req, res);
});

router.get("/cardAlertasDISCO", function (req, res) {
    medidaController.cardAlertasDISCO(req, res);
});

router.get("/cardAlertasREDE", function (req, res) {
    medidaController.cardAlertasREDE(req, res);
});

module.exports = router;