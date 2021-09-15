let readline = require('readline-sync')
/* import { question } from 'readline-sync' */

let multiploA = readline.question('Como devo chamar o primeiro multiplo?')
let multiploB = readline.question('Como devo chamar o segundo multiplo?')

function digitalHouse(a, b) {
  for (let i = 1; i <= 100; i++) {
    if (i % a == 0 && i % b == 0) {
      console.log(multiploA + ' ' + multiploB)
    } else if (i % a == 0) {
      console.log(multiploA)
    } else if (i % b == 0) {
      console.log(multiploB)
    } else {
      console.log(i)
    }
  }
}

digitalHouse(12, 7)
