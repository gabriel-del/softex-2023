let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] 

// Solução 1
console.log(array.indexOf(20))

//Solução 2
array.forEach((n,index) => {if ( n === 20 ) console.log(index) })

// Não compensa a binária por não estar ordenada.