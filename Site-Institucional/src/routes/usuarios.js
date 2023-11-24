var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/login", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/validar", function (req, res) {
    usuarioController.validar(req, res);
});
router.put("/editarNoc", function (req, res) {
    usuarioController.editarNoc(req, res);
});
router.delete("/deletar", function (req, res) {
    usuarioController.deletar(req, res);
});

module.exports = router;