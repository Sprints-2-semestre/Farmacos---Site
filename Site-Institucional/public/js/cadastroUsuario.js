function cadastrar(){
    var nome = input_Nome_Completo.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var confirmarSenha = input_confirmar_senha.value;
    var cargo = select_cargo.value;
    var permissao = select_permissao.value;
    /*
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
        alert(`Email cadastrado é invalido!! Para cadastrar é preciso que o email tenha '@' e '.com'`)
        document.getElementById('input_Nome_Completo').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('input_email').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('select_cargo').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px #00000056';
        return false;
    } else {*/
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
                permissaoServer : permissao

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
        alert(`Email cadastrado é invalido!! Para cadastrar é preciso que o email tenha '@' e '.com'`)
        document.getElementById('input_Nome_Completo').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('input_email').style.boxShadow = '0px 2px 0px 0px red'
        document.getElementById('input_senha').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('select_cargo').style.boxShadow = '0px 2px 0px 0px #00000056'
        document.getElementById('select_permissao').style.boxShadow ='0px 2px 0px 0px #00000056';
        return false;
    } else {
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
            })
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
                setTimeout(() => {
                   window.location = "usuarios.html";
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

    
