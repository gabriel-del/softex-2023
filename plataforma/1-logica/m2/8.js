let candidatos = [
    {nome: "candidato_X", id: 889, votos: 0},
    {nome: "candidato_Y", id: 847, votos: 0},
    {nome: "candidato_Z", id: 515, votos: 0},
    {nome: "branco", id: 0, votos: 0},
    {nome: "nulo", id: "Outro", votos: 0}
]

const listarCandidatos = () => {candidatos.forEach(candidato => console.log(`${candidato.nome}: ${candidato.id}`))}
const listarCandidatosFinal = () => {candidatos.forEach(candidato => console.log(`${candidato.nome}: ${candidato.votos}`))}

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
  return finalizar === "s"
}
  
const pegarVotos = async () => {
  let candidatosId=[]
  candidatos.forEach(candidato => candidatosId.push(candidato.id))
  while(true){
  voto = await pedirVoto()
  if (candidatosId.includes(voto)) { candidatos.filter(candidato => candidato.id === voto)[0].votos++}
  else if (isNaN(voto)) { console.log("Inválido: vote novamente")}
  else { candidatos.filter(candidato => candidato.nome === "nulo")[0].votos++ }
  if (await finalizarVotacao()) break
  }
 }

(async () => {

await pegarVotos()
// console.log(candidatos)
listarCandidatosFinal()
})()

// TODO: string: repetir
// TODO: mostrar vencedor
