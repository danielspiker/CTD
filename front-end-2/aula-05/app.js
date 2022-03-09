function escreverHTML(titulo, texto) {
  const body = document.getElementById('body')
  const meuTemplate = `
    <h1>${titulo}</h1>
    <p>${texto}</p>`

  body.innerHTML += meuTemplate
}

let titulo = prompt('digite titulo')
let texto = prompt('digite o texto')

escreverHTML(titulo, texto)

document.getElementById('botao').addEventListener('click', contrast)

function contrast() {
  document.body.classList.toggle('contrast')
}
