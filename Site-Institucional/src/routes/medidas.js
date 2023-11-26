var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/obterIdMaquina", function (req, res) {
    medidaController.obterIdMaquina(req, res);
});

router.get("/obterNomeAme/:IdUserVar", function (req, res) {
    medidaController.obterNomeAme(req, res);
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

router.get("/dadosCPU", function (req, res) {
    medidaController.dadosCPU(req, res);
});
router.get("/dadosRAM", function (req, res) {
    medidaController.dadosRAM(req, res);
})
router.get("/dadosDISCO", function (req, res) {
    medidaController.dadosDISCO(req, res);
});
router.get("/dadosREDE", function (req, res) {
    medidaController.dadosREDE(req, res);
});

router.post("/inserirAlertaCPU", function (req, res) {
    medidaController.inserirAlertaCPU(req, res);
});

router.post("/inserirAlertaRAM", function (req, res) {
    medidaController.inserirAlertaRAM(req, res);
});

router.post("/inserirAlertaDISCO", function (req, res) {
    medidaController.inserirAlertaDISCO(req, res);
});

router.post("/inserirAlertaREDE", function (req, res) {
    medidaController.inserirAlertaREDE(req, res);
});

router.get("/listagemAlerta/", function (req, res) {
    medidaController.listagemAlerta(req, res);
});

module.exports = router;