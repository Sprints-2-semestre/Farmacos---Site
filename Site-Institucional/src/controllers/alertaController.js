var alertaModel = require("../models/alertaModel");

function cadastrarAlerta(req, res) {
    var componente = req.body.valorCompServer;
    var maximo = req.body.maximoServer;
    var medio = req.body.medioServer;
           
    if (componente == undefined) {
        res.status(400).send("Seu componente está undefined!");
    } else if (maximo == undefined) {
        res.status(400).send("Sua parâmetro máximo está indefinida!");
    } else if (medio == undefined) {
        res.status(400).send("Sua parâmetro médio está indefinida!");
    } else {
        alertaModel.cadastrarAlerta(componente, maximo, medio)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function alterarAlerta (req, res) {
    var componente = req.body.valorCompServer;
    var maximo = req.body.maximoServer;
    var medio = req.body.medioServer;
           
    if (componente == undefined) {
        res.status(400).send("Seu componente está undefined!");
    } else if (maximo == undefined) {
        res.status(400).send("Sua parâmetro máximo está indefinida!");
    } else if (medio == undefined) {
        res.status(400).send("Sua parâmetro médio está indefinida!");
    } else {
        alertaModel.alterarAlerta(componente, maximo, medio)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function listarAlertas(req, res) {
    alertaModel.listarAlertas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function deletarAlerta(req, res) {
    var componente = req.params.nomeTipoComp;

    alertaModel.deletarAlerta(componente)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrarAlerta,
    alterarAlerta,
    listarAlertas,
    deletarAlerta
}
