let funcao = prompt(`Funções disponíveis (Digite o número correspondente) \n1 - Desafio dia da Semana\n2 - Desafio número positivo ou negativo\n3 - Sistema de pontuação\n4 - Saldo\n5 - Prompt de nome`);

switch (funcao) {

    case ("1"):

        let dia = prompt("Digite um dia da semana");
        dia = dia.toUpperCase();

        if (dia == "SABADO" || dia == "SÁBADO" || dia == "DOMINGO") {
            alert("Bom final de semana!");
        } else {
            alert("Boa semana!");
        }

        break;


    case ("2"):

        let numero = prompt("Informe um número");

        if (numero == 0) {
            alert("0 é um número neutro");
        } else if (numero < 0) {
            alert("número negativo");
        } else {
            alert("número positivo!");
        }

        break;

    case ("3"):
        let pontos = 0;
        while(pontos<100){
            pontos = prompt("Digite sua pontuação");
            if (pontos >= 100) {
                alert("Você ganhou!")
            } else {
                alert("Tente novamente!")
            }
        }

        break;

    case ("4"):
        let saldo = prompt("Informe seu saldo");
        alert(`Seu saldo atual é $${saldo}`);
        break;

    case ("5"):
        let nome = prompt("Informe seu nome");
        prompt(`Bem vindo +${nome}!`);
        alert("Fim do desafio!");
        break;
    default:
        alert("Função incorreta!");
}