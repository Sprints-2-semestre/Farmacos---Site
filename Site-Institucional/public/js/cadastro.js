function cadastro() {
    var nomeVar = input_Nome_Completo.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmarSenhaVar = input_confirmar_senha.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmarSenhaVar == "") {
        alert("Preencha todos os campos!");
        return false;
    } else if (nomeVar.length < 3) {
        alert('Seu nome tem que ter no mínimo 3 letras!!!')
        return false;
    } else if (emailVar.indexOf("@") == -1 && emailVar.indexOf(".com") == -1) {
        alert(`Email cadastrado é invalido!! Para cadastrar é preciso que o email tenha @adm.com`)
        return false;
    } else if (senhaVar != confirmarSenhaVar) {
        alert(`Os campos de senha e confirmar senha estão diferentes`)
        return false;
     } //else if{
    //     window.location.href = "login.html";
    //     alert("Cadastro realizado com sucesso!");
    //     return true;
     else {

    fetch("/usuario/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            setTimeout(() => {
               window.location = "login.html";
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