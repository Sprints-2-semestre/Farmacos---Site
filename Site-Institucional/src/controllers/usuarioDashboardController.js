var usuarioDashboardModel = require("../models/usuarioDashboardModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;
    var email = req.body.emailServer;
    var cargo = req.body.cargoServer;
    var permissao = req.body.permissaoServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else if (nome == undefined){
        res.status(400).send("Seu nome está indefinido!");
    } else if (cargo == undefined){
        res.status(400).send("Seu cargo está indefinido!");
    } else if (permissao == undefined){
        res.status(400).send("Sua permissao está indefinida!");
    } else{
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioDashboardModel.cadastrar(nome, email, senha, cargo, permissao)
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

    function editar(req, res) {
        var nome = req.body.nomeServer;
        var senha = req.body.senhaServer;
        var email = req.body.emailServer;
        var cargo = req.body.cargoServer;
        var permissao = req.body.permissaoServer;
    
        if (email == undefined) {
            res.status(400).send("O email está undefined!");
        } else if (senha == undefined) {
            res.status(400).send("A senha está indefinida!");
        } else if (nome == undefined){
            res.status(400).send("O nome está indefinido!");
        } else if (cargo == undefined){
            res.status(400).send("O cargo está indefinido!");
        } else if (permissao == undefined){
            res.status(400).send("A permissao está indefinida!");
        } else{
            
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            usuarioDashboardModel.editar(nome, email, senha, cargo, permissao)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar a Edição! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
        }
        function listar(req, res) {
            usuarioDashboardModel.listar()
                .then(function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!")
                    }
                }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
        function puxarUsuarios(req, res){

            const headerAuthorization = String(req.headers.authorization);

            // 'Bearer 12321'

            // ['Bearer', '12321']

            const fkAme = headerAuthorization.split(' ')[1];

            usuarioDashboardModel.puxarUsuarios(fkAme)
            .then(function (resultado) {
                console.log(resultado);
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        
        }

        function excluirUsuario(req, res){

            const headerAuthorization = String(req.headers.authorization);

            // 'Bearer 12321'

            // ['Bearer', '12321']

            const idUsuario = headerAuthorization.split(' ')[1];

            usuarioDashboardModel.excluirUsuario(idUsuario)
            .then(function (resultado) {
                console.log(resultado);
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        
        }

module.exports = {
    listar,
    cadastrar, 
    editar,
    puxarUsuarios,
    excluirUsuario
}