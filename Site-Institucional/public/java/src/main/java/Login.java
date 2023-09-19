import java.util.List;

public class Login {
    // Inicialize o contador de erros
    String nomeSobrenome (String nome, List nomesCadastrados, List admin) {
        // Percorre a lista e verifica se o nome digitado se encontra lá.

        Integer indice = -1;


        for (int i = 0; i < nomesCadastrados.size(); i++) {

            if (nomesCadastrados.get(i).equals(nome)){ // se o nome cadastrado na posicao i for igual ao nome digitado
                indice = i; // o novo indice se torna aquele
            }
        }
        // caso esteja, retorna a mensagem de login.
        if (indice.equals(-1)) { // se o indice for igual a -1 (nao esta na lista) retorna a mensagem de erro.
            return "Verifique seus dados e tente novamente. Se o erro persistir, significa que você não está cadastrado no nosso sistema. ";
        } else {
            administrador(nome, admin);
            return "\nOlá " + nomesCadastrados.get(indice) + " que bom te ver novamente!";

        }
    }

    String administrador (String nome, List admin) {
        for (int i = 0; i < admin.size(); i++) {
            if (admin.get(i).equals(nome)) {
                return "Você tem permissões de acesso administrador.";
            }
        }
        return "";
    }

    //String logarComSenha (String senha){}
}



// Nome Sobrenome, verifica se tem na lista se nao encerra.
// Verifica se tem acesso administrador, se sim retorna mensagem. se nao passa reto (só if)
// solicita senha
