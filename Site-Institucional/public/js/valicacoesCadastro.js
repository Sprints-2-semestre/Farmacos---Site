function cadastro() {
    var nome_Completo = input_Nome_Completo.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmarSenhaVar = input_confirmar_senha.value;
    var cargoVar = select_cargo.value;

    if (nome_Completo == "" || emailVar == "" || senhaVar == "" || confirmarSenhaVar == "" || cargoVar == "") {
        alert("Preencha todos os campos!");
        return false;
    } else if (nome_Completo.length < 3) {
        alert('Seu nome tem que ter no mínimo 3 letras!!!')
        return false;
    } else if (emailVar.indexOf("@") == -1 && emailVar.indexOf(".com") == -1) {
        alert(`Email cadastrado é invalido!! Para cadastrar é preciso que o email tenha @adm.com`)
        return false;
    } else if (senhaVar != confirmarSenhaVar) {
        alert(`Os campos de senha e confirmar senha estão diferentes`)
        return false;
    } else {
        window.location.href = "login.html";
        alert("Cadastro realizado com sucesso!");
        return true;
    }
};