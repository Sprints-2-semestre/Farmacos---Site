
function voltar() {
    window.location.href = "farmacos.html";

}
function cadastro() {
    var nome_Completo = input_Nome_Completo.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmarSenhaVar = input_confirmar_senha.value;

    if (nome_Completo == "" ||emailVar == "" || senhaVar == "" || confirmarSenhaVar == "") {
        alert("Preencha todos os campos!");
        document.getElementById('input_Nome_Completo').style.boxShadow ='0px 2px 0px 0px red'
        document.getElementById('input_email').style.boxShadow ='0px 2px 0px 0px red'
        document.getElementById('input_senha').style.boxShadow ='0px 2px 0px 0px red'
        document.getElementById('input_confirmar_senha').style.boxShadow ='0px 2px 0px 0px red'
        return false;
    } else if (nome_Completo.length <= 2) {
        alert('Seu nome tem que ter no mínimo 3 letras!!!')
        document.getElementById('input_Nome_Completo').style.boxShadow ='0px 2px 0px 0px red'
        document.getElementById('input_email').style.boxShadow ='0px 2px 0px 0px 00000056'
        document.getElementById('input_senha').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('input_confirmar_senha').style.boxShadow ='0px 2px 0px 0px #00000056'
        return false;
    } else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        alert(`Email cadastrado é invalido!! Para cadastrar é preciso que o email tenha '@' e '.com'`)
        document.getElementById('input_Nome_Completo').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('input_email').style.boxShadow ='0px 2px 0px 0px red'
        document.getElementById('input_senha').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('input_confirmar_senha').style.boxShadow ='0px 2px 0px 0px #00000056'
        return false;
    } else if (senhaVar != confirmarSenhaVar) {
        alert(`Os campos de senha e confirmar senha estão diferentes`)
        document.getElementById('input_Nome_Completo').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('input_email').style.boxShadow ='0px 2px 0px 0px #00000056'
        document.getElementById('input_senha').style.boxShadow ='0px 2px 0px 0px red'
        document.getElementById('input_confirmar_senha').style.boxShadow ='0px 2px 0px 0px red'
        return false;
    } else {
        window.location.href = "login.html";
        alert("Cadastro realizado com sucesso!");
        return true;
    }
}