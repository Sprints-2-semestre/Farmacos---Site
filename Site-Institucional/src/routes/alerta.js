var express = require("express");
var router = express.Router();

var alertaController = require("../controllers/alertaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarAlerta", function (req, res) {
    alertaController.cadastrarAlerta(req, res);
})

router.post("/alterarAlerta", function (req, res) {
    alertaController.alterarAlerta(req, res);
})

router.get("/listarAlertas/", function (req, res) {
    alertaController.listarAlertas(req, res);
});

router.delete("/deletarAlerta/:nomeTipoComp", function (req, res) {
    alertaController.deletarAlerta(req, res);
});
module.exports = router;