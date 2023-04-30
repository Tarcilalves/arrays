const menu = [
    {
        nome: "panquecas com manteiga",
        categoria: "café da manhã",
        preco: 15.99,
        status: "disponível"
    },
    {
        nome: "sanduiche vegano",
        categoria: "lunch",
        preco: 13.99,
        status: "disponível"
    },
    {
        nome: "milkshake",
        categoria: "shakes",
        preco: 6.99,
        status: "disponível"
    },
    {
        nome: "Café clássico",
        categoria: "café da manhã",
        preco: 20.99,
        status: "86"
    },
    {
        nome: "sanduiche de ovo",
        categoria: "lunch",
        preco: 22.99,
        status: "disponível"
    }
];

let tipoDeRefeicao = menu.filter((menu) => menu.categoria === "café da manhã");
console.log(tipoDeRefeicao);


const pedido = menu.find((menu) => menu.nome === "Café clássico");

if (pedido.status !== "86") {
    console.log('disponível!');
} else {
    console.log('Desculpe, o item não está disponível :(');
}


