// 1- Adiciona ao cartão, o atributo "class" com o valor "cartao"
document.querySelector('#cartao').setAttribute('class', 'cartao')

// 2- Adicione o atributo "src" à imagem com o valor "https://www.youtube.com/img/desktop/yt_1200.png"
document
  .querySelector('#logo')
  .setAttribute('src', 'https://www.youtube.com/img/desktop/yt_1200.png')

// 3- Remova a classe "titulo-feio" do título do documento
document.querySelector('h1').removeAttribute('class')

// 4- Verifique se o link para o YouTube tem o atributo href ou não, e imprima esse resultado no console
let temHref = document.querySelector('#link_youtube').hasAttribute('href')
console.log(temHref)

// 5- Capture o valor de href do link do Wikipedia e exiba no console
let link = document.querySelector('#link_wikipedia').getAttribute('href')
console.log(link)
