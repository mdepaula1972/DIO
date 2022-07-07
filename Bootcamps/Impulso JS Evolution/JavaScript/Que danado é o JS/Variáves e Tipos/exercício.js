// vou declarar as variáveis e atribuir valor
var firstName = "João";
var lastName = "Souza";

// agora abrirei um novo escopo:
/* Se a variável firstName for do mesmo tipo e valor
eu a mudarei, mas não o lastName, pois está
como let e não var o novo valor atribuído: */
if (firstName === "João") {
    var firstName = "Pedro";
    let lastName = "Silva"; 
// a variável last name ficou com cor diferente, pois não teve utilização
}
console.log(firstName, lastName)
