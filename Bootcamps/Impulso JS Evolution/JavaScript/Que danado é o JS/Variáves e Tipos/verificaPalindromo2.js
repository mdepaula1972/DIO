function verificaPalindromo2(string) {
	if (!string) return "string inexistente";
	if (!string.length) return "string inexistente";

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

verificaPalindromo2("");