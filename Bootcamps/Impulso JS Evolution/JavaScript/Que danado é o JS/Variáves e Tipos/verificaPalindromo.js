// vou declarar a função
function verificaPalindromo(string) {
  // vamos fazer a checagem se a string existe:
  if (!string) return "string inexistente";
  // observe que o primeiro passo é detectar a inexistência dela, através do "!"

  // agora vamos implantar um loop que irá verificar 2 caracteres da string por vez:
  for (let i = 0; i < string.length / 2; i++) {
    //enquanto i for menor que o tamanho da string/2, o loop continua 
    if (string[i] !== string[string.length - 1 - i]) {
        return false;
        /* como o loop sempre vai para o índice seguinte, aqui ele vai ver 
    se a string [i] é diferente da string na posição do tamanho do
    do lenght -1 e menos o i, ou seja, buscando de trás para frente 
    para bater com a evolução de frente para trás: primeiro com último,
    segundo com penúltimo e assim sucessivamente */

    }
      
  }
  // se a condição acima não for diferente, ele retornará o true
  return true;
}
console.log(verificaPalindromo("sgsdgsfgaasfasf"));