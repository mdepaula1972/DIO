//criando a função de nome array (pode ser qualquer nome)
function substituiPares(array) {
     // primeiro vamos ver se ele não é nulo:
     if(!array) return false;
     if(!array.length) return false;
     
    //precisaremos realizar um loop inteiro:
    for(let i = 0; i < array.length; i++) {
        // agora vamos verificar se ele já não é zero
        if(array[i] === 0) {
            // Já informa no console que ele já é zero:
            console.log("Você já é zero!!")
            /* agora, não sendo zero, vamos ver se o resto da divisão é 
            divisível por 2 com resultado igual a zero, logo, par. 
            Para isso, utilizamos o "% 2'*/
        }else if (array[i] % 2 === 0) {
            //sendo par, vamos fazer a substituição do número pelo 0:
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;       
        }
    }
    }

	
// vamos criar a variável para inserir os dados na array []:
let arr = [x,2, 4, 5, 7, 8, 10, 12];
if(arr = Number) {
    return arr;  
// vamos executar a variável:
console.log(substituiPares(arr))
} else {
    console.log("Tem que utilizar números")
}
return false
