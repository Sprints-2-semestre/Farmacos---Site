var express = require("express");
var router = express.Router();

var listarNocController = require("../controllers/listarNocController");

router.post("/alterar", function (req, res) {
    listarNocController.alterar(req, res);
});
router.post("/puxarNoc", function (req, res) {
    listarNocController.puxarNoc(req, res);
});
router.delete("/excluirnoc", function (req, res) {
    listarNocController.excluirNoc(req, res);
});

module.exports = router;