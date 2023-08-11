let pessoas = ["pessoa1", "pessoa2", "pessoa3", "pessoa4", "pessoa5", "pessoa6", "pessoa7", "pessoa8", "pessoa9", "pessoa10" ]
let idades = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let cores = ["azul", "vermelho", "amarelo", "laranja", "verde", "cinza", "preto", "branco", "lilás", "violeta"]

console.log({pessoas,idades,cores})
cores.splice(cores.indexOf("verde"), 1, "dourado")
idades.splice(idades.indexOf(22), 1, 33)
console.log({pessoas,idades,cores})