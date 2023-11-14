var express = require("express");
var router = express.Router();

var usuarioDashboardController = require("../controllers/usuarioDashboardController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    usuarioDashboardController.cadastrar(req, res);
});

router.post("/alterar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    usuarioDashboardController.alterar(req, res);
});

router.get("/listar/:idUsuario", function(req, res) {
    usuarioDashboardController.listar(req, res);
 });

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    usuarioDashboardController.listar(req, res);
});
router.get("/puxarUsuarios", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    usuarioDashboardController.puxarUsuarios(req, res);
});

module.exports = router;