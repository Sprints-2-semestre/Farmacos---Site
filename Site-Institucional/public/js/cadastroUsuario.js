function cadastrar(){
    var nome = input_Nome_Completo.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var confirmarSenha = input_confirmar_senha.value;
    var cargo = select_cargo.value;
    var permissao = select_permissao.value;
    var fkAme = sessionStorage.TOKEN_AME;

    if (nome == "" || email == "" || senha == "" || cargo == "" || permissao == "") {
        alert("Preencha todos os campos!");
        document.getElementById('input_Nome_Completo').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_email').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('select_cargo').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px red';
        return false;
    } else if (email.indexOf("@farmacos.com") == -1) {
    alert("Email cadastrado é invalido!! Para cadastrar é preciso que o email tenha @farmacos.com")
            document.getElementById('input_email').style.boxShadow = '0px 2px 0px 0px red'
            return false;
    } else if( senha != confirmarSenha){
        alert("As senhas não combinam! Tente novamente")
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_confirmar_senha').style.boxShadow = '0px 2px 0px 0px red'
        return false;
    } else if (nome.length <= 2) {
        alert('O nome deve ter no mínimo 3 letras!!!')
        document.getElementById('input_Nome_Completo').style.boxShadow ='0px 2px 0px 0px red'
        document.getElementById('input_email').style.boxShadow ='0px 2px 0px 0px 00000056'
        document.getElementById('input_senha').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('select_cargo').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px #00000056';
        return false;
    } else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        alert(`Email cadastrado é invalido!! Para cadastrar é preciso que o email tenha '@' e '.com'`)
        document.getElementById('input_Nome_Completo').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('input_email').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('select_cargo').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px #00000056';
        return false;
    }else {

        fetch("../usuarioDashboard/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha,
                cargoServer : cargo,
                permissaoServer : permissao,
                fkAmeServer: fkAme
                

            })
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
                console.log("opa")
                    setTimeout(() => {
                        window.location = "./dashboard/listaUsuario.html";
                    }, "2000")
    
            } else {
                alert("Erro ao cadastrar")
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
        return false;
    }
    
};

function editar (){
    var nome = input_Nome_Completo.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var confirmarSenha = input_confirmar_senha.value;
    var cargo = select_cargo.value;
    var permissao = select_permissao.value;
    var idUsuario = localStorage.idUsuario
    
    if (nome == "" || email == "" || senha == "" || cargo == "" || permissao == "") {
        alert("Preencha todos os campos!");
        document.getElementById('input_Nome_Completo').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_email').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('select_cargo').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px red';
        return false;
    } else if( senha != confirmarSenha){
        alert("As senhas não combinam! Tente novamente")
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_confirmar_senha').style.boxShadow = '0px 2px 0px 0px red'
        return false;
    } else if (nome.length <= 2) {
        alert('O nome deve ter no mínimo 3 letras!!!')
        document.getElementById('input_Nome_Completo').style.boxShadow ='0px 2px 0px 0px red'
        document.getElementById('input_email').style.boxShadow ='0px 2px 0px 0px 00000056'
        document.getElementById('input_senha').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('select_cargo').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px #00000056';
        return false;
    } else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        alert(`Email cadastrado é invalido!! Para editar é preciso que o email tenha '@' e '.com'`)
        document.getElementById('input_Nome_Completo').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('input_email').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('select_cargo').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px #00000056';
        return false;
    } else if (email.indexOf("@farmacos.com") == -1) {
        alert(`Email cadastrado é invalido!! Para editar é preciso que o email tenha @farmacos.com`)
        return false;
    }else {
        fetch("/usuarioDashboard/editar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha,
                cargoServer: cargo,
                permissaoServer: permissao,
                idUsuarioServer: idUsuario
            })
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
                
              
                setTimeout(() => {
                   window.location = "./listaUsuario.html";
                }, "2000")
    
            } else {
                alert("Erro ao editar")
                throw ("Houve um erro ao tentar realizar a edição!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
        return false;
    }

}

async function puxarUsuarios() {
    var fkAme = sessionStorage.TOKEN_AME;

    const usuarios = await fetch("/usuarioDashboard/puxarUsuarios", {
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
                <span id='name_span' class='left-align'>${usuario.nome.toUpperCase()}</span>
                <span id='icon_remove' class='right-align'>
                    <i class="fa-solid fa-trash" style="font-size: 18px;" onclick="obterId(${usuario.idUsuario})"></i>
                </span>
                <span id='icon_edit' class='right-align'><a href="editarUsuario.html" onclick="obterId(${usuario.idUsuario})"><i  class="fa-solid fa-pen" style="font-size: 18px;"></i></a></span>
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

function obterId(idUsuario) {
    localStorage.setItem("idUsuario", idUsuario)
}


function excluirUsuario(){
    var idUsuario = localStorage.idUsuario;

    fetch("/usuarioDashboard/excluirUsuario", {
        method: "delete",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            idUsuarioServer: idUsuario
        
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
          setTimeout(() => {
       window.location = "./listaUsuario.html";
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