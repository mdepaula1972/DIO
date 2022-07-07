// criando uma função declarativa chamada calculadora
function calculadora(){
    // criando o painel para pegar informações do usuário e declarar as operações
    const operacao = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)');

    // Primeiro precisamos verificar se a operação é válida, então criaremos essa verificação:
    if (!operacao || operacao > 6) {
        alert('Erro - operação inválida');
        calculadora();
    } else {
        // inserindo as variáveis onde serão armazenados os valores digitados
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;
        // vamos criar a verificação para ver se o valor inserido atende o padrão numérico exigido pelas variáveis n1 e n2:
        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos')
            calculadora();
        }else {
        //criando as funções que vão gerar os resultados - Atentar que é sinal de crase no alert
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é = ${resultado}`)
            novaOperacao();
        }
        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é = ${resultado}`)
            novaOperacao();
        }
        // agora vamos inserir uma função para que o algoritmo pergunte se queremos fazer uma nova operação:
        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
            // aqui ele vai chamar a calculadora novamente se digitado sim (1)
            if (opcao == 1) {
                calculadora();
            // agora ele se despede se digitado não (2)
            } else if (opcao == 2) {
                alert('Até mais')
            } else {
                alert('Digite uma opção válida')
                novaOperacao();
            }
        
        }
        /* agora vamos criar um verificador de operações:
        if (operacao == 1){
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        } */

        //Podemos também substituir o código acima por um switch case:
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4: divisaoReal();
                break;
            case 5: divisaoInteira();
                break;
            case 6: potenciacao();
                break;
        }
        }
    }    
}
        calculadora();
