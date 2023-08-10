let candidatos = [
    {nome: "candidato_X", id: 889, votos: 0},
    {nome: "candidato_Y", id: 847, votos: 0},
    {nome: "candidato_Z", id: 515, votos: 0},
    {nome: "branco", id: 0, votos: 0},
    {nome: "nulo", id: "Outro", votos: 0}]

const pedirVoto = async () => {
  const rl = require('readline').createInterface({input: process.stdin, output: process.stdout});
  listarCandidatos()
  const voto = await new Promise(voto => rl.question("Vote digitando o número do seu candidato: ", voto))
  rl.close()
  return +voto}

const finalizarVotacao = async () => {
  const rl = require('readline').createInterface({input: process.stdin, output: process.stdout});
  const  finalizar = await new Promise(finalizar => rl.question("Deseja finalizar a votação? (s/n) ", finalizar))
  rl.close()
  return finalizar === "s"}

const listarCandidatos = () => {candidatos.forEach(({nome,id}) => console.log(`\t${nome}: ${id}`))}
const listarCandidatosFinal = () => {candidatos.forEach(({nome,votos}) => console.log(`\t${nome}: ${votos} votos`))}

const listarVencedor = () => {
 const max = candidatos.reduce( (acc, current) => current.votos > acc ? current.votos : acc , 0 )
 candidatos.filter(({votos}) => votos === max).forEach(({nome, votos}) => console.log(`\t${nome}: ${votos} votos`))}
  
const pegarVotos = async () => {
  let candidatosId=[]
  candidatos.forEach(candidato => candidatosId.push(candidato.id))
  while(true){
    voto = await pedirVoto()
    if (candidatosId.includes(voto)) { candidatos.filter(candidato => candidato.id === voto)[0].votos++}
    else if (isNaN(voto)) { console.log("Inválido: vote novamente") ;continue}
    else { candidatos.filter(candidato => candidato.nome === "nulo")[0].votos++ }
    if (await finalizarVotacao()) break }}

(async () => {
  await pegarVotos()
  console.log("\nResultado Final: ")
  listarCandidatosFinal()
  console.log("\nVencedor(es): ")
  listarVencedor()
})()

