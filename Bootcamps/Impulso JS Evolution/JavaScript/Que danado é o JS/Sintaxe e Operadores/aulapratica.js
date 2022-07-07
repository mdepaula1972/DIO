function comparaNumeros(num1, num2) {
    // vamos criar as frases:
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    // vamos concatenar a frase 1 com a frase 2:
    return `${primeiraFrase} ${segundaFrase}`;
}

// aí vamos a função "Primeira Frase":
function criaPrimeiraFrase(num1, num2) {
    // aí vamos colocar a análise utilizando uma string auxiliar (let) permitindo mudar se os valores delas se forem ou não iguais:
    let saoIguais = ''; // se elas forem iguais o valor será 0
    if(num1 !== num2) {
        saoIguais = 'não'; // se os valores não forem iguais vai retornar o não
    }
    // Então aqui no return, sendo os números iguais, o texto mantem-se; se diferentes, será acrescida a variável não estabelecida no {somosIguais}
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

// vamos declarar a função da segunda frase:
function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    // vamos criar as strings para cada comparativo:
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    
    const compara10 = soma > 10; // essa variável é bolleana retornando true ou false
    const compara20 = soma > 20; // essa variável é bolleana retornando true ou false

    if(compara10) {
        resultado10 = 'maior'; // se resultado for maior que 10 ele muda para maior
   }

   if(compara20) {
    resultado20 = 'maior'; // se resultado for maior que 20 ele muda para maior

}
        
// retornando a segunda frase usando crase para inserir as variáveis:
return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;

}

console.log(comparaNumeros(15, 10));
        
           