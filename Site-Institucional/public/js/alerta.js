function cadastrarAlerta() {
    var componente = document.getElementById("select_Comp");
    var valorCompVar = componente.value;
    var maximoVar = par_max.value;
    var medioVar = par_med.value;

    if (valorCompVar == "") {
        alert("Preencha o componente que deseja alterar!");
        return false;
    // } else if (medioVar > maximoVar){
    //     alert ("Parâmetro médio maior que o parâmetro máximo !!")
    }else {
    fetch("/alerta/cadastrarAlerta", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            valorCompServer: valorCompVar,
            maximoServer: maximoVar,
            medioServer: medioVar,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso!")
        } else {
            alert("Erro ao cadastrar")
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;  
}
}

function alterarAlerta() {
    var componente = document.getElementById("select_Comp");
    var valorCompVar = componente.value;
    var maximoVar = par_max.value;
    var medioVar = par_med.value;

    if (valorCompVar == "") {
        alert("Preencha o componente que deseja alterar!");
        return false;
    } else if (medioVar > maximoVar) {
        alert ("Parâmetro Médio maior que Parâmetro Máximo")
    }
    else {
    fetch("/alerta/alterarAlerta", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            valorCompServer: valorCompVar,
            maximoServer: maximoVar,
            medioServer: medioVar,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert ("Atualização realizado com sucesso!")
            setTimeout(() => {
                window.location = "cadastroAlerta.html";
            }, "800")

        } else {
            alert("Erro ao cadastrar")
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
    //
}
}

function mudarPagina() {
    window.location = "alterarAlerta.html";
}

function listarAlertas() {
    console.log ("Entrando no listarAlertas()")

    fetch("/alerta/listarAlertas/").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("feed_container");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = ""
                feed.appendChild(mensagem);
                throw "";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                var feed = document.getElementById("feed_container");
                var colunas = document.getElementById("colunas-container");
                feed.appendChild(colunas);

                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    // criando e manipulando elementos do HTML via JavaScript
                    var linha = document.createElement("tr");
                    var nomeTipoComp = document.createElement("td");
                    var maximo = document.createElement("td");
                    var medio = document.createElement("td");
                    var areaDelete = document.createElement("td");
                    var areaUpdate = document.createElement("td");
                    

                    nomeTipoComp.innerHTML = `<span>${publicacao.nomeTipoComp}</span>`
                    maximo.innerHTML = `${publicacao.maximo}`
                    medio.innerHTML = `${publicacao.medio}`

                    var buttonDelete = document.createElement("button");
                    buttonDelete.textContent = "Deletar"; // Texto do botão
                    buttonDelete.className = "btn-excluir"
                    areaDelete.appendChild(buttonDelete);
                    buttonDelete.setAttribute("onclick", `deletarAlerta('${publicacao.nomeTipoComp}')`);


                    var buttonUpdate = document.createElement("button");
                    buttonUpdate.textContent = "Atualizar"; // Texto do botão
                    buttonUpdate.className = "btn-alterar"
                    areaUpdate.appendChild(buttonUpdate);
                    buttonUpdate.setAttribute("onclick", `mudarPagina()`);

                    feed.appendChild(linha);
                    linha.appendChild(nomeTipoComp);
                    linha.appendChild(maximo);
                    linha.appendChild(medio);
                    linha.appendChild(areaDelete);
                    linha.appendChild(areaUpdate);

                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function deletarAlerta(nomeTipoComp) {
    console.log("Entrando deletarAlerta()" + nomeTipoComp);

    fetch(`/alerta/deletarAlerta/${nomeTipoComp}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }
}).then(function (resposta) {
    if (resposta.ok) {
        alert("Alerta deletado com sucesso!")
        setTimeout(() => {
            window.location = "../dashboard/cadastroAlerta.html"
        }, "800")
    } else if (resposta.status == 404) {
        window.alert("Deu 404!");
    } else {
        throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
    } ''
}).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
});
}