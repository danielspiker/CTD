/* ==========================
ATRIBUIÇÃO
========================== */
// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40
idade += 1 //--->  atribui somando mais um a propria variavel
idade -= 1 //---> atribui subtraindo mais um a propria variavel

let peso = 78
peso *= 2 //---> multiplica por 2
peso /= 2 //---> divide valor de peso por 2
idade %= 2 //---> resto da divisão de idade por 2
peso **= 2 //---> eleva a potencia de 2

/* ==========================
ARITMÉTICOS
========================== */
// Nos permitem fazer operações matemáticas

10 + 15 //---> Soma
10 - 15 //---> Subtração
10 * 15 //---> Multiplicação
10 / 15 //---> Divisão
// 15++    //---> Incremento de um em um: 15 + 1
// 15--    //---> Decremento de um em um: 15 - 1
15 % 5 //---> Módulo. O resto obtido da divisão de 15 por 5: 0
15 % 2 //---> Módulo. O resto obtido da divisão de 15 por 2: 1

10 ** 2 //---> Exponenciação

/* ==========================
COMPARAÇÃO SIMPLES
========================== */
8 == 9 //---> false. Compara apenas os valores
8 != 9 //--> true.

/* ==========================
COMPARAÇÃO ESTRITA
========================== */
8 === '8' //---> false. Compara os valores e os tipos
8 !== 9 //---> true. tipos iguais, mas valores diferentes

/* ==========================
OPERADORES RELACIONAIS
========================== */
5 > 25 //---> false
5 < 25 //---> true
25 >= 5 // ---> true
5 <= 5 //---> true

/* ==========================
LÓGICOS
========================== */
// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano
10 >= 10 && 8 !== '8' //---> true, pos as duas condições são true
10 >= 10 && 8 !== '8' //---> false, pois a segunda condição é false
10 >= 10 || 8 !== '8' //---> true, pois uma das condições é true
!false //---> true, pois eé a negação de false

if (null && '') {
  console.log('deu true')
} else {
  console.log('deu falsy5')
}

let tem = false

if (!tem) {
  console.log('mas ta faltando')
}

console.log('---------ex 1-------')
console.log(!!true)
console.log(!1)
console.log(!0)
console.log(!!'')
let x = 5
let y = 9
console.log(x < 10 && x !== 5)
console.log(!(x === y))
x = 10
y = 'a'
console.log(y === 'b' || x >= 10)
x = 3
y = 8
console.log(!(x == '3' || x === y) && !(y !== 8 && x <= y))
let str = ''
let msg = 'haha!'
let eBonito = 'false'
console.log(!((str || msg) && eBonito))
