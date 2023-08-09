const pedirNascimento = async () => {
  const rl = require('readline').createInterface({input: process.stdin, output: process.stdout});
  const nascimento = await new Promise(nascimento => rl.question("Informe o ano do seu nascimento (1922-2022): ", nascimento))
  rl.close()
  return +nascimento}
  
const pegarNascimento = async (nascimento) => {
  while (typeof nascimento != "number" || nascimento < 1922 || nascimento > 2022 || isNaN(nascimento)) nascimento = await pedirNascimento()
  return nascimento}

(async () => {
let nascimento
nascimento = await pegarNascimento(nascimento)
idade = 2022-nascimento
console.log(`Idade ao final de 2022: ${idade}`)
})()
