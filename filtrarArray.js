// const numVela = [4, 4, 1 ,3];
// const numFiltrados = numVela.filter(function(numMaior){
//     return numMaior >= 4;
// });

// console.log(numFiltrados);

//simplificar a função para ser apenas uma condicional:
const numVela = [7, 2, 3, 8, 8, 6];
const numFiltrados = numVela.filter((numero) => numero >= 8); //(=>) não é um operador, mas a notação para função de seta
console.log(numFiltrados); 
