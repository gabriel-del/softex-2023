function calculadora(a, b){
  console.log(`A soma de ${a} e ${b} é: ${a+b}`)
  console.log(`A subtração de ${a} e ${b} é: ${a-b}`)
  console.log(`A multiplicação de ${a} e ${b} é: ${a*b}`)
  console.log(`A divisão de ${a} e ${b} é: ${a/b}`)
}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b  
readline.question(`Digite o primeiro número`, a => { readline.close();});
readline.question(`Digite o segundo número`, b => { readline.close();});
// calculadora(a, b)
console.log("\n numeroooo:", a)