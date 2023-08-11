let array = [3, 7, 9, 1, 0]

//fila
console.log(array.shift())
//: Do primeiro ao último

//lista
array.splice(0, 1)
console.log(array)
//: Em qualquer ordem; Nessa configuração seria do primeiro ao último

//pilha
console.log(array.pop())
//: Do último ao primeiro