const notasPedro = [6, 8, 10, 8.5];
const notasFelipe = [9, 10, 9.5, 8.5];
const notasLucas = [8, 9, 9.5, 8.5];

const notasSala = notasPedro.concat(notasFelipe).concat(notasLucas);

console.log(`A lista de notas dos alunos ${notasSala}.`);

// resposta: A lista de notas dos alunos 6,8,10,8.5,9,10,9.5,8.5,8,9,9.5,8.5.

const frase1 = ["Olá, "];
const frase2 = ["mundo!!"];

const fraseCompleta = frase1.concat(frase2);

console.log(fraseCompleta); // Resposta: [ 'Olá, ', 'mundo!!' ]