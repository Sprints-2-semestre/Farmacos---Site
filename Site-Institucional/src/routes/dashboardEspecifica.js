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

module.exports = router;