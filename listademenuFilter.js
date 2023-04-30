// Classificaremos uma lista de menu, removendo todos os itens com preços que não estejam entre 15 e 25.

//A faixa de preço é um objeto separado, que passamos para filter() o contexto. 
//De certa forma é normalmente usado para definir um objeto de "configuração", contendo valores que podemos acessar genericamente, sem codificá-los:

const menu = [
    {
        name: "Panquecas",
        preco: 15.99
    },
    {
        name: "PF",
        preco: 13.99
    },
    {
        name: "Milkshake",
        preco: 6.99
    },
    {
        name: "Feijoada",
        preco: 20.99
    },
    {
        name: "Chambari",
        preco: 22.99
    }
];

let faixaDePreco = {
    menorPreco: 15,
    maiorPreco: 25
};

//Agora, vamos ultilizar o filter() com a lista de menu, passando o faixaDePreco como o context:

let menuFiltrado = menu.filter(function (menu) {
    return menu.preco >= this.menorPreco && menu.preco <= this.maiorPreco;
}, faixaDePreco);

console.log(menuFiltrado);

// [
//     { name: 'Panquecas', preco: 15.99 },
//     { name: 'Feijoada', preco: 20.99 }, 
//     { name: 'Chambari', preco: 22.99 }  
//   ]
