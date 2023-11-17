async function puxarNoc() {
    var fkAme = sessionStorage.FK_AME;

    const usuarios = await fetch("/usuarioDashboard/puxarNoc", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + fkAme
        },
    })
    .then(function (resposta) {
        if (resposta.ok) {
            return resposta.json();
        } else {
            return undefined;
        }
    })
    .catch(function (erro) {
        console.error(`#ERRO: ${erro}`);
        alert("Houve um erro ao buscar usuários");
        return undefined;
    });

    if (usuarios) {
        for (var usuario of usuarios) {
            let tableRef = document.getElementById('usuarios_container');
            let newRow = tableRef.insertRow(-1);
            let newCell = newRow.insertCell(0);
          
    
            newCell.innerHTML = `
                <span onclick="armazenarId()" id='name_span' class='left-align'>${usuario.nome.toUpperCase()}</span>
                <span onclick="armazenarId()"id='icon_remove' class='right-align'>
                    <i class="fa-solid fa-trash" style="font-size: 18px;"></i>
                </span>
                <span id='icon_edit' class='right-align'><a href="editarUsuario.html"><i class="fa-solid fa-pen" style="font-size: 18px;"></i></a></span>
            `;

            
    
            // Adicionar evento de clique ao ícone de exclusão
            let iconRemove = newCell.querySelector('#icon_remove');
            iconRemove.addEventListener('click', function () {
                // Exibir o modal
                document.getElementById('confirmacaoModal').style.display = 'block';
            });
    
            // Adicionar evento de clique ao botão de cancelar no modal
            let cancelarExclusao = document.getElementById('cancelarExclusao');
            cancelarExclusao.addEventListener('click', function () {
                // Ocultar o modal
                document.getElementById('confirmacaoModal').style.display = 'none';
            });
    
            // Adicionar evento de clique ao botão de confirmar no modal
            let confirmarExclusao = document.getElementById('confirmarExclusao');
            confirmarExclusao.addEventListener('click', function () {
                // Aqui você pode adicionar a lógica para excluir o usuário
                // ...
    
                // Ocultar o modal após a exclusão
                document.getElementById('confirmacaoModal').style.display = 'none';
            });
    
            // Adicionar evento de clique ao botão de fechar no modal
            let fecharModal = document.getElementById('fecharModal');
            fecharModal.addEventListener('click', function () {
                // Ocultar o modal
                document.getElementById('confirmacaoModal').style.display = 'none';
            });
    
            // Fechar o modal se o usuário clicar fora da área do modal
            window.addEventListener('click', function (event) {
                let modal = document.getElementById('confirmacaoModal');
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
        
    }
}    
function armazenarId (){
    var idUsuario = usuario.idUsuario;
    
    fetch("/usuarioDashboard/puxarNoc", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: idUsuario,

        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO listar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
        
                sessionStorage.ID_SELECIONADO = json.idusuario;
             

               // setTimeout(function () {
                   // window.location = "./dashboard/dashboardGeral.html";
              //  }, 1000); // apenas para exibir o loading

            });

        } else {
            console.log("Houve um erro ao salvar");
            alert("Não funcionou");
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function excluirUsuario(){
    fetch("/usuarioDashboard/excluirUsuario", {
        method: "delete",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
        
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            setTimeout(() => {
                window.location = "../login.html";
            }, "2000")

        } else {
            alert("Erro ao excluir")
            throw ("Houve um erro ao tentar excluir o usuario!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
}