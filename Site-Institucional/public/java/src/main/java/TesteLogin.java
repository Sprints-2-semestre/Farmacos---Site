import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TesteLogin {
    public static void main(String[] args) {
        Login log = new Login();
        Scanner entrada = new Scanner(System.in);
        List<String> nomesCadastrados = new ArrayList<>();
        List<String> admin = new ArrayList<>();

        nomesCadastrados.add("mariana nascimento de oliveira");
        nomesCadastrados.add("diego hessel motta verdi");
        nomesCadastrados.add("tiaki wauke cardozo");
        nomesCadastrados.add("davi maciel de oliveira britto");
        nomesCadastrados.add("victor quintans ito da silva");
        nomesCadastrados.add("kaua de queiroz teles");

        admin.add("mariana nascimento de oliveira");
        admin.add("tiaki wauke cardozo");

        System.out.println("\nBem-vindo ao Sistema de Login da insiraonomedaempresa!\nPara continuar siga as instruções do console.\n" +
                "____________________________________________________________________________________________________________________\n" +
                "Digite seu nome completo: ");

        String nome = entrada.nextLine();

        String verificacao = log.nomeSobrenome(nome, nomesCadastrados, admin);
        String permissoes = log.administrador(nome, admin);

        System.out.println(verificacao); //exibe se a pessoa está ou não cadastrada no sistema.
        System.out.println(); // quebra de linha
        System.out.println(permissoes); // exibe se a pessoa tem permissoes.


        //verificacao de senha, dar uma melhorar essa parte depois.
        // criar um metodo (no outro arquivo) para fazer essa verificação.

        System.out.println("\nDigite sua senha:");
        String senha = entrada.nextLine();

        Integer contador = 1; // a pessoa terá 3 tentativas de inserir a senha
        while (!senha.equals("batatinha123") && contador <= 2){
            System.out.println("Senha incorreta. Tente novamente. \n Restam " + (3-contador) + " tentativas.");
            contador++;
            senha = entrada.nextLine();
        }

        if (senha.equals("batatinha123")){
            System.out.println("Acesso permitido! Parabéns você está logado.");
        } else {
            System.out.println("Acesso bloqueado. Tente novamente mais tarde.");
        }

        entrada.close();
    }

}
