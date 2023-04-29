const notas = [10, 6, 8, 5.5, 10];

notas.pop();

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}.`);

// PS C:\Users\User\Documents\arrays> node deletandoNota.js
// [ 10, 6, 8, 5.5 ] --> mostra que foi deletando o último item da lista '10' 
// A média é 7.375.