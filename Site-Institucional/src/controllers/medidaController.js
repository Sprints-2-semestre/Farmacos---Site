var medidaModel = require("../models/medidaModel");


function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function obter_dados_rede(req, res) {

    medidaModel.obter_dados_rede().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).j
        
        son(erro.sqlMessage);
    });
}

function obterDadosDisco(req, res) {

    medidaModel.obterDadosDisco().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).j
        
        son(erro.sqlMessage);
    });
}

function obterDadosCPU(req, res) {

    medidaModel.obterDadosCPU().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).j
        
        son(erro.sqlMessage);
    });
}

function obterDadosRAM(req, res) {

    medidaModel.obterDadosRAM().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).j
        
        son(erro.sqlMessage);
    });
}

function redeMedidasEmTempoReal(req, res) {

    // var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.redeMedidasEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterNomeAme(req, res) {

    var IdUserVar = req.params.IdUserVar;
    medidaModel.obterNomeAme(IdUserVar).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("IdMaquina não encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar IdMaquina.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function obterIdMaquina(req, res) {

    medidaModel.obterIdMaquina().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("obterIdMaquina não encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar obterIdMaquina.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listaAlerta(req, res) {

    medidaModel.listarAlerta().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("obterListaAlerta não encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar obterListaAlerta.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function cardAlertasCPU(req, res) {

    medidaModel.cardAlertasCPU().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("cardAlertasCPU não encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar cardAlertasCPU.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cardAlertasRAM(req, res) {

    medidaModel.cardAlertasRAM().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("cardAlertasRAM não encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar cardAlertasRAM.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cardAlertasDISCO(req, res) {

    medidaModel.cardAlertasDISCO().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("cardAlertasDISCO não encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar cardAlertasDISCO.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cardAlertasDISCO(req, res) {

    medidaModel.cardAlertasDISCO().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("cardAlertasDISCO não encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar cardAlertasDISCO.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cardAlertasREDE(req, res) {

    medidaModel.cardAlertasREDE().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("cardAlertasREDE não encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar cardAlertasREDE.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cardAlertasREDE(req, res) {

    medidaModel.cardAlertasREDE().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("cardAlertasREDE não encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar cardAlertasREDE.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function dadosCPU(req, res) {

    medidaModel.dadosCPU().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("dadosRAM não encontrado");s
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar dadosRAM.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function dadosRAM(req, res) {

    medidaModel.dadosRAM().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("dadosRAM não encontrado");s
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar dadosRAM.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function dadosDISCO(req, res) {

    medidaModel.dadosDISCO().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("dadosDISCO não encontrado");s
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar dadosDISCO.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function dadosREDE(req, res) {

    medidaModel.dadosREDE().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("dadosREDE não encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar dadosREDE.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    buscarUltimasMedidas,
    redeMedidasEmTempoReal,
    obter_dados_rede,
    obterDadosDisco,
    obterDadosCPU,
    obterDadosRAM,
    obterIdMaquina,
    listaAlerta,
    obterNomeAme,
    obterIdMaquina,
    cardAlertasCPU,
    cardAlertasRAM,
    cardAlertasDISCO,
    cardAlertasREDE,
    dadosCPU,
    dadosRAM,
    dadosDISCO,
    dadosREDE
}