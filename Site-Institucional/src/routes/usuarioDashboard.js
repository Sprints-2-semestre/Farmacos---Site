var express = require("express");
var router = express.Router();

var usuarioDashboardController = require("../controllers/usuarioDashboardController");

router.post("/cadastrar", function (req, res) {
    usuarioDashboardController.cadastrar(req, res);
});

router.post("/editar", function (req, res) {
    usuarioDashboardController.editar(req, res);
});
router.post("/puxarUsuarios", function (req, res) {
    usuarioDashboardController.puxarUsuarios(req, res);
});
router.delete("/excluirUsuario", function (req, res) {
    usuarioDashboardController.excluirUsuario(req, res);
});

module.exports = router;