function vogalEconsoante(string) {
  var vogais = []
  var consoantes = []
  var resultado = []
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == 'a' ||
      string[i] == 'e' ||
      string[i] == 'i' ||
      string[i] == 'o' ||
      string[i] == 'u'
    ) {
      vogais.push(string[i])
    } else {
      consoantes.push(string[i])
    }
  }
  resultado = vogais.concat(consoantes)
  console.log(resultado.join(''))
}

vogalEconsoante('paralelepipedo')
