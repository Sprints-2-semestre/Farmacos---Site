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
    } else if (emailVar.indexOf("@farmacos.com") == -1) {
    alert("Email cadastrado é invalido!! Para cadastrar é preciso que o email tenha @farmacos.com")
            document.getElementById('input_email').style.boxShadow = '0px 2px 0px 0px red'
            return false;
    } else if( senha =! confirmarSenha){
        alert("As senhas não combinam! Tente novamente")
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_confirmar_senha').style.boxShadow = '0px 2px 0px 0px red'
        return false;
    } else if (nome_Completo.length <= 2) {
        alert('O nome deve ter no mínimo 3 letras!!!')
        document.getElementById('input_Nome_Completo').style.boxShadow ='0px 2px 0px 0px red'
        document.getElementById('input_email').style.boxShadow ='0px 2px 0px 0px 00000056'
        document.getElementById('input_senha').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('select_cargo').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px #00000056';
        return false;
    } else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
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
                console.log("opa");
    
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
    

    if (nome == "" || email == "" || senha == "" || cargo == "" || permissao == "") {
        alert("Preencha todos os campos!");
        document.getElementById('input_Nome_Completo').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_email').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('select_cargo').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px red';
        return false;
    } else if( senha =! confirmarSenha){
        alert("As senhas não combinam! Tente novamente")
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_confirmar_senha').style.boxShadow = '0px 2px 0px 0px red'
        return false;
    } else if (nome_Completo.length <= 2) {
        alert('O nome deve ter no mínimo 3 letras!!!')
        document.getElementById('input_Nome_Completo').style.boxShadow ='0px 2px 0px 0px red'
        document.getElementById('input_email').style.boxShadow ='0px 2px 0px 0px 00000056'
        document.getElementById('input_senha').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('select_cargo').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px #00000056';
        return false;
    } else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        alert(`Email cadastrado é invalido!! Para editar é preciso que o email tenha '@' e '.com'`)
        document.getElementById('input_Nome_Completo').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('input_email').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('select_cargo').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px #00000056';
        return false;
    } else if (emailVar.indexOf("@farmacos.com") == -1) {
        alert(`Email cadastrado é invalido!! Para editar é preciso que o email tenha @farmacos.com`)
        return false;
    }else {
        fetch("/usuarioDashboard/editar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha,
            })
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {

              
                setTimeout(() => {
                   window.location = "./dashboard/listaUsuario.html";
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

function listar (){
    var fkAme = sessionStorage.TOKEN_AME;
    fetch("../usuarioDashboard/listar", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
          
            fkAmeServer: fkAme
            

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log("opa");

        } else {
            alert("Erro ao cadastrar")
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;

}

    
function puxarUsuarios(idUsuario) {
    lista_usuarios.innerHTML = ""
    fetch(`/usuarioDashboard/listar/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
       if (response.ok) {
          if (response.status === 204) {
             console.log("vazio")
          } else {
             response.json().then(function (resposta) {
                // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                var div = document.getElementById("lista_usuarios");
                resposta.forEach(element => {
                   div.innerHTML += `
                   <li id="usuario${element.idUsuario}" fkAme='${element.fkAme}' onclick="puxarIdUsuario('usuario${element.idUsuario}')">
                      
                      <a href="./dashboard/edidarUsuario.html"> ${element.fkAme} </a>
                   </li>
                   `
                });
             });
          }
       } else {
          console.error('Nenhum dado encontrado ou erro na API');
       }
    })
       .catch(function (error) {
          console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
       });
 }
 