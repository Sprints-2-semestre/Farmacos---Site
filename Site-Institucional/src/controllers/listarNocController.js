function editarNoc(req, res) {
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
        listarNocModel.editarNoc(nome, email, senha, cargo, permissao)
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
    function puxarN(req, res){

        const headerAuthorization = String(req.headers.authorization);

        const fkAme = headerAuthorization.split(' ')[1];

        usuarioDashboardModel.puxarN(fkAme)
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
puxarNoc,
excluirUsuario
}